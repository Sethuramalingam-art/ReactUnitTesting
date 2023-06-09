import { fireEvent, render, act, RenderResult } from "@testing-library/react";
import { AsyncDropdownlist } from "./AsyncDropdownlist";
//Async api call testing - act and RenderResult

//non-null assertion operator  is used to resolve variable is used before assigned for render result
const makeSut = () => {
  return render(<AsyncDropdownlist />);
};

describe("<App />", () => {
  //   test("Should render the data", () => {
  //     const { container, getByText } = makeSut();

  //     fireEvent.click(getByText(/Show Data/));

  //     expect(container.querySelector("ul")).toBeInTheDocument();
  //   });

  test("Should render data", async () => {
    let screen: RenderResult;

    await act(async () => {
      screen = makeSut();
    });

    fireEvent.click(screen!.getByText(/Show Data/));

    expect(screen!.container.querySelectorAll("li").length).toBe(5);
  });
});
