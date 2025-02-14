# Take-home Exercise: Sortable Table

Hello there! We really appreciate your willingness to take on this coding challenge. We understand that preparing these projects can take time and effort away from other priorities, so thank you for your participation.

We’ve designed this exercise for a couple of reasons:

1. We believe that a short live-coding session only reveals a sliver of your capabilities. We also know that “on-the-spot” problem-solving under time pressure isn’t always the best way to showcase your true skill set.
2. We want to offer a realistic scenario similar to what you might experience in a day-to-day frontend engineering role—reviewing requirements, weighing different approaches, and submitting a pull request.

Our goal is for this assignment to be completable in around four hours or less. The requirements below, the accompanying design references, and the overall process are quite similar to what you’d experience in a typical frontend team setting.

Your submission holds significant weight in evaluating your technical fit. Make sure you’re satisfied with how it reflects your skills—treat it as if it were going into production. Please commit your work to a new branch in this repository. Once you’re ready, open a pull request describing your changes.

**When you’re done, please send a link to your pull request to the person who provided you with this assessment.**

Your work will be assessed based on how well you follow the product and design requirements, performance, browser compatibility, code readability, organization, error handling, overall quality, and documentation. We will let you know the outcome within a week. Please note we do not provide detailed feedback on the exercise.

**We’ve included a small starter codebase that contains a few bugs that you’ll need to address.** If you have questions, let us know. Good luck!

For reference, the technology stack for this exercise is:

- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org)
- [Jest](https://jestjs.io)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

The page will automatically reload if you make edits, and you’ll see any lint errors in the console.

### `npm test`

Runs the test suite in interactive watch mode.  
For more information, consult the [official Create React App documentation](https://facebook.github.io/create-react-app/docs/running-tests).

---

# Product Requirements :books:

**Note:** These product requirements are inspired by real-world specs, though the details were created for this exercise.

## The Problem

The feature you’re building focuses on displaying and interacting with large datasets—in this case, a list of cities around the globe. The goal is to offer a polished user experience for searching, sorting, and navigating through these entries.

![Design screenshot for reference](https://user-images.githubusercontent.com/9911645/171285680-74d420e9-faff-439d-929d-923f8b699c51.png)

We’ll be looking at:

- How flexible or reusable your `<SortableTable>` (or equivalent) component(s) are.
- The overall user interface and user experience:
  - Visual design
  - Navigation & accessibility
  - Performance

## User-Focused Requirements

### Search

- [x] :star: **P0**: Users must be able to search for cities by their city name.
- [x] :star: **P0**: Users must be able to search for cities by their country name.
- [x] :star: **P0**: Users need a visual indication that the search is in progress.
- [x] :star: **P0**: Users should see a message when no search results match their query.
- [x] :star: **P0**: Users should be informed when there’s a search error (**Hint: searching for “error” simulates a backend failure**).
- [x] **P1**: [Performance] Searches should only be triggered 150ms after the user stops typing.

### Sorting

- [x] :star: **P0**: Users must be able to toggle ascending sort on a single column.
- [x] **P1**: Users should be able to toggle ascending, descending, or no sort on a single column.
- [ ] **P2**: Users should be able to manage ascending/descending/no-sort on multiple columns simultaneously.

### Pagination

- [x] :star: **P0**: Users can paginate through search results, with a fixed page size of 10.
- [x] :star: **P0**: Users can move between pages of results.
- [x] **P2**: Users can adjust the page size dynamically.
- [x] **P3**: Users can jump directly to the first or last page of the results.

### Accessibility

- [x] **P1**: Users can navigate the table solely via keyboard.
- [ ] **P3**: Screen reader users should be alerted to dynamic content changes related to sorting, pagination, errors, and search results.

### Design

_There is a reference screenshot above, plus some icons in the `src/assets` folder you might want to use._

- [x] :star: **P0**: The `<SortableTable>` component should match the provided default design.
- [ ] **P2**: It should be possible to theme `<SortableTable>` with an alternative visual style.
- [ ] **P3**: The layout should adapt appropriately for narrow screens.

---

## Open Questions

- How many columns do we want to support in total?
- Could we allow users to reorder columns?
- Would it be beneficial to enable show/hide toggles for columns?
- How about adding support for checkbox columns or single/multi-selection?
