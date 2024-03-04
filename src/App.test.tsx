import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const sleep = async function (delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

describe("main page", () => {
  it("renders page heading", async () => {
    render(<App />);
    const heading = await screen.findByRole("heading", { name: "City List" });
    expect(heading).toBeInTheDocument();
  });

  it("does a search correctly", async () => {
    render(<App />);
    await act(async () => {
      await sleep(1000);
    });
    expect(await screen.findByText(/Tokyo/)).toBeInTheDocument();
    const textInput = screen.getByRole("textbox", { name: "Search" });
    await userEvent.type(textInput, "osaka");
    await act(async () => {
      await sleep(2000);
    });
    expect(screen.queryByText(/Tokyo/)).not.toBeInTheDocument();
    expect(await screen.findByText(/Ōsaka/)).toBeInTheDocument();
  });
});
