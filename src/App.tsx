import { useEffect, useCallback, useState, useMemo } from "react";
import type { ChangeEvent } from "react";
import type { City } from "api/getCities";
import { getCities } from "api/getCities";

import { SortableTable } from "component/SortableTable/SortableTable";
import { TableCaption } from "component/TableCaption/TableCaption";
import { TableHeader } from "component/TableHeader/TableHeader";
import { TableDataCell } from "component/TableDataCell/TableDataCell";
import { TableHeaderCell } from "component/TableHeaderCell/TableHeaderCell";
import { TableRow } from "component/TableRow/TableRow";
import { TableBody } from "component/TableBody/TableBody";

import { ReactComponent as Search } from "./assets/Search.svg";

import "App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(10000);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );

  const sleep = async function (delay: number) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  };

  const cityRows = useMemo(
    () =>
      cities.map((s) => (
        <tr key={s.id}>
          <TableDataCell>{s.countryIso3}</TableDataCell>
          <TableDataCell>{s.name}</TableDataCell>
          <TableDataCell>{s.country}</TableDataCell>
          <TableDataCell>{s.population}</TableDataCell>
        </tr>
      )),
    [cities]
  );

  const runSearch = useCallback(
    async (term: string) => {
      setIsLoading(true);
      setError(undefined);
      try {
        await sleep(500); // This is to simulate the loading state during a slow API response
        let offset = (currentPage - 1) * pageSize;

        const searchResult = await getCities({
          searchTerm: term,
          limit: -1,
          offset: offset,
          sortField: sortField,
          sortDirection: sortDirection,
        });
        const slicedResults = searchResult.slice(offset, offset + pageSize);
        if (searchResult.length === 0) {
          throw new Error(`${term} not found.`);
        }
        setTotalItems(searchResult.length);
        setCities(slicedResults);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    },
    [pageSize, currentPage, sortField, sortDirection]
  );

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      runSearch(searchTerm);
    }, 500); // this felt better than 150ms

    return () => clearTimeout(debounceSearch);
  }, [runSearch, searchTerm, currentPage]);

  const onSearchTermChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleSort = (field: string) => {
    if (field === sortField) {
      if (sortDirection === "desc") {
        setSortField(null);
        setSortDirection(null);
      } else {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      }
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="App">
      <aside>
        <p>
          This was a takehome project while interviewing for a front-end
          position on a design system team. You can view the{" "}
          <a href="https://github.com/taurean/table-search-takehome">
            public repo on github
          </a>{" "}
          for more info.
        </p>
      </aside>
      <header className="appHeader">
        <h1 className="u:txt-heading-725">City List</h1>
      </header>
      <main className="appContent">
        <form className="tableSearchForm">
          <label htmlFor="search" className="searchLabel u:txt-heading-625">
            Search
          </label>
          <div className="inputWrapper">
            <Search className="inputSearchIcon" role="presentation" />
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Enter a city or country name…"
              className="inputSearch"
              onChange={onSearchTermChange}
            />
          </div>
        </form>
        <SortableTable
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={totalItems}
          tableItemType="cities"
          onPageChange={(newPage) => setCurrentPage(newPage)}
          onPageSizeChange={(newSize) => setPageSize(newSize)}
        >
          <TableCaption>
            This is a table caption for showing a sortable and filterable table
            of cities in the world.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHeaderCell
                heading="Country Code"
                className={
                  sortField === "countryIso3" ? sortDirection || "" : ""
                }
                handleSort={() => handleSort("countryIso3")}
              />
              <TableHeaderCell
                heading="City"
                className={sortField === "nameAscii" ? sortDirection || "" : ""}
                handleSort={() => handleSort("nameAscii")}
              />
              <TableHeaderCell
                heading="Country"
                className={sortField === "country" ? sortDirection || "" : ""}
                handleSort={() => handleSort("country")}
              />
              <TableHeaderCell
                heading="Population"
                className={
                  sortField === "population" ? sortDirection || "" : ""
                }
                handleSort={() => handleSort("population")}
              />
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <tr>
                <td>loading…</td>
              </tr>
            ) : error ? (
              <tr>
                <td>{`Eek! ${error.message}`}</td>
              </tr>
            ) : (
              cityRows
            )}
          </TableBody>
        </SortableTable>
      </main>
    </div>
  );
};

export default App;
