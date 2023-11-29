import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//unit testing
//multiple test caeses inside where we can test the application of multiple components at a time or nesting the test cases
describe("Contact us test cases", () => {
  test("Should load contact us component", () => {   //we can use "it" also, instead of "test" it's a alias of "test"
    render(<Contact />); //rendered to the jsdom first
    const heading = screen.getByRole("heading"); //find out all the heading inside the component

    //assertion is likely to be expect
    expect(heading).toBeInTheDocument(); //toBeInTheDocument - coming from "@testing-library/jest-dom" library
  });

  test("Should load button inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  //for multiple items of the component
  test("Should load 2 input boxes inside Contact us component", () => {
    render(<Contact />);
    //Querrying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length); ///it returns jsx
    expect(inputBoxes.length).toBe(2);
  });
});
