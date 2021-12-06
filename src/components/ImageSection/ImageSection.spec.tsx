import React from "react";
import { render, screen } from "@testing-library/react";
import ImageSection from "./ImageSection";
import { PhotoProps } from "screens/Home/Home";

const obj = {
  alt_description: "dog running on beach during daytime",
  id: "1",
  likes: 1000,
  photo:
    "https://images.unsplash.com/photo-1530281700549-e8…58MHx8fHwxNjM4NzM1NTA0&ixlib=rb-1.2.1&q=80&w=1080"
} as PhotoProps;

const obj2 = {
  alt_description: "dog running on beach during daytime",
  id: "2",
  likes: 1,
  photo:
    "https://images.unsplash.com/photo-1530281700549-e8…58MHx8fHwxNjM4NzM1NTA0&ixlib=rb-1.2.1&q=80&w=1080"
} as PhotoProps;

describe("<ImageSection/>", () => {
  it("should render ImageSection with correct properties", () => {
    render(<ImageSection photo={obj} liked={false} handleLiked={jest.fn} />);

    expect(
      screen.getByAltText("dog running on beach during daytime")
    ).toBeInTheDocument();

    expect(screen.getByText("1000 likes")).toBeInTheDocument();
  });

  it("should render ImageSection with one like", () => {
    render(<ImageSection photo={obj2} liked={false} handleLiked={jest.fn} />);

    expect(
      screen.getByAltText("dog running on beach during daytime")
    ).toBeInTheDocument();

    expect(screen.getByText("1 like")).toBeInTheDocument();
  });
});
