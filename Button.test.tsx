import { Button, ButtonProps } from "../Shared/Button";
import { fireEvent, render } from "@testing-library/react";

//sut - system under test
const makeSut = (props: Partial<ButtonProps>) => {
  return render(<Button label="label" onClick={jest.fn()} {...props}></Button>);
};
//The render function will render the component in a container and return some helpers like:
// getByText, getByTestId, getByRole, debug, unmount and more.
describe("<Button/>", () => {
  test("Should render label correctly", () => {
    const { getByText } = makeSut({ label: "testing" });
    expect(getByText(/testing/)).toBeInTheDocument();
  });

  //The fireEvent will dispatch an Event in the element we pass as argument,
  // there are a lot of events, like: click, change, submit, blur, focus, etc.
  test("Should call onclick successfully", () => {
    const spy = jest.fn();
    const { getByText } = makeSut({ onClick: spy });
    fireEvent.click(getByText(/label/));
    expect(spy).toHaveBeenCalled();
  });
});
