import React from "react";
import { render, screen } from "@testing-library/react";
import UserInfoSection from "./UserInfoSection";

describe("<UserInfoSection/>", () => {
  it("should render image and user name correctly", () => {
    render(
      <UserInfoSection
        name="Oscar Sutton"
        profile_photo="https://images.unsplash.com/photo-1530281700549-e8…58MHx8fHwxNjM4NzM1NTA0&ixlib=rb-1.2.1&q=80&w=1080"
      />
    );
    expect(screen.getByAltText("Oscar Sutton")).toBeInTheDocument();
    expect(screen.getByText("Oscar Sutton")).toBeInTheDocument();
  });
});
