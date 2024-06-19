const { render,screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import HeaderComponent from "../HeaderComponent"
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import "@testing-library/dom"
describe("tests for header component",()=>{

    it("should load header component",()=>{

        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
            </BrowserRouter>
            
            
    );
    // if there are multiple buttons but we want buttone with name Login
        const loginButton  = screen.getByRole("button",{name:"Login"});
        // const loginButton  = screen.getByRole("button");
        // const loginButton  = screen.getByText("Login");
        expect(loginButton).toBeInTheDocument()
    });

    
    it("should load header component",()=>{

        render(
            <BrowserRouter>
            <Provider store={appStore}>
                <HeaderComponent />
            </Provider>
            </BrowserRouter>
            
            
    );
        const loginButton  = screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton);
        const logotButton  = screen.getByRole("button",{name:"Logout"});
        expect(logotButton).toBeInTheDocument()
    })


});
