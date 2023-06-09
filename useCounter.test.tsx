import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";

import { useCounter } from "./counter";

const makeSut = () => {
  return renderHook(() => useCounter());
};

describe("useCounter()", () => {
  test("Should return 0 on initial state", () => {
    const { result } = makeSut();

    expect(result.current.state).toBe(0);
  });

  test("Should increment 1", () => {
    const { result } = makeSut();

    act(() => {
      result.current.increment();
    });

    expect(result.current.state).toBe(1);
  });

  test("Should decrement 1", () => {
    const { result } = makeSut();

    act(() => {
      result.current.decrement();
    });

    expect(result.current.state).toBe(-1);
  });
});
