import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";


it("Should render RestaurantCard Component with props Data", () => {
    render(<ResturantCard  resData={MOCK_DATA} />);

   const name = screen.getByText("The Moody Chef");

    expect(name).toBeInTheDocument();
})