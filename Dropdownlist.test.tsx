import { Dropdownlist, DropdownlistProps } from "./Dropdownlist";
import { fireEvent, render, screen } from "@testing-library/react";
// getByText will query inside baseElement

// screen.getByText will query inside document.body
const data = [
  { value: "toyota", label: "toyota" },
  { value: "KIA", label: "KIA" },
];

const labels = { hide: "dropdownHide", show: "dropdownShow" };

const makeSut = (props: Partial<DropdownlistProps>) => {
  return render(
    <Dropdownlist
      data={data}
      labels={labels}
      onRemoveItem={jest.fn()}
      {...props}
    ></Dropdownlist>
  );
};

describe("<DropdwonList />", () => {
  test("Should not render ul component on initial render", () => {
    const { container } = makeSut({});
    expect(container.querySelector("ul")).not.toBeInTheDocument();
  });

  test("Should render ul component when click on button", () => {
    const { container, getByText } = makeSut({});
    fireEvent.click(getByText(labels.show));
    expect(container.querySelector("ul")).toBeInTheDocument();
  });

  test("Should call onRemoveItem callback correctly", () => {
    const onRemoveItem = jest.fn();
    const { getByText, getAllByText } = makeSut({ onRemoveItem });
    //screen.getByText can use for getByText
    fireEvent.click(getByText(labels.show));
    fireEvent.click(getAllByText(/Remove/)[1]);
    expect(onRemoveItem).toHaveBeenCalledWith(data[1], 1);
  });
});
