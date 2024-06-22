import { fireEvent, getAllByTestId, render,screen } from "@testing-library/react";
import Body from '../Body'
import MOCK_DATA from '../mocks/mockRestList.json'
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render the body COmponent with Search", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20)
    const searchButton = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"burger"}});
    fireEvent.click(searchButton);
    // screen should load 1 card
    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);
    //  expect(searchButton).toBeInTheDocument();


});
