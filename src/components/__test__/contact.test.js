import { render,screen } from "@testing-library/react";
import ContactUs from "../Contact";
import "@testing-library/jest-dom"
import "@testing-library/dom"

describe("Contact use test cases",()=>{
   
    // test("it should load contact us component",()=>{
    //     render(<ContactUs />);
    //    const heading = screen.getByRole("heading");
    //    expect(heading).toBeInTheDocument();
    // });
    // it is alias for test
    it("should load contact us component",()=>{
        render(<ContactUs />);
       const heading = screen.getByRole("heading");
       expect(heading).toBeInTheDocument();
    });
    
    test("it should load a button",()=>{
        render(<ContactUs />);
        const button  = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("it should load input field name",()=>{
        render(<ContactUs />);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });
    
    test("it should load 2 input boxes",()=>{
        render(<ContactUs />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2)
    });
});


