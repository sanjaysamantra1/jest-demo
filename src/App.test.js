import { getAllByAltText, render, screen } from "@testing-library/react";
import App from "./App";

describe("i am test-suite-1", () => {
  // test-suite

  test("renders learn react link", () => {
    //test-case-1
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    const ele2 = screen.getByText(/save to reload/i);
    expect(ele2).toBeInTheDocument();
    console.log("test-case-1");
  });

  it("this is test case", () => {
    //test-case-2
    console.log("test-case-2");
  });

  it("This is it-3", () => {
    console.log("it-3")
  });

  beforeAll(() => {
    console.log("before all");               //1   initalization
  });
  beforeEach(() => {                     // N # it()
    console.log("before each");
  });
  afterEach(() => {                      // N # it()
    console.log("after each");
  });
  afterAll(() => {                       // 1   cleanup
    console.log("after all");
  });

});

