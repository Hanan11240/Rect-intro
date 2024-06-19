const { render,screen } = require("@testing-library/react");
import RestaurantCard from '../RestaurantCard'
import MOCK_DATA from '../mocks/ResData.Mocks.json'
import "@testing-library/dom";
import "@testing-library/jest-dom"


it("should render Restaurant card component with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const resName = screen.getByText("Pizza Hut");
    expect(resName).toBeInTheDocument();
});

it("should render Restaurant Card component with Promoted Label",()=>{
    // withPromotedLabel
});
