import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";
import { Provider } from "context/provider/Provider";

describe("<Login/>", () => {
  it("Should render email and password inputs", () => {
    render(
      <Provider>
        <Login />
      </Provider>
    );

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("Should render Logo image", () => {
    render(
      <Provider>
        <Login />
      </Provider>
    );
    expect(screen.getByAltText("Unsplash Logo")).toBeInTheDocument();
  });

  it("should render error message 'Email and password are Required' when try to login with empty values for email and password", () => {
    render(
      <Provider>
        <Login />
      </Provider>
    );
    userEvent.click(screen.getByRole("button", { name: "Log in" }));

    const errorMessage = screen.getByText("Email and password are Required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render error message 'Password is Required' when try to login empty value for email", () => {
    render(
      <Provider>
        <Login />
      </Provider>
    );
    const inputEmail = screen.getByPlaceholderText("Email");
    userEvent.type(inputEmail, "joaopaulo@email.com");
    expect(inputEmail).toHaveValue("joaopaulo@email.com");

    userEvent.click(screen.getByRole("button", { name: "Log in" }));

    const errorMessage = screen.getByText("Password is Required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render error message 'Email is Required' when try to login empty value for email", () => {
    render(
      <Provider>
        <Login />
      </Provider>
    );
    const inputPassword = screen.getByPlaceholderText("Password");
    userEvent.type(inputPassword, "123456");
    expect(inputPassword).toHaveValue("123456");

    userEvent.click(screen.getByRole("button", { name: "Log in" }));

    const errorMessage = screen.getByText("Email is Required");
    expect(errorMessage).toBeInTheDocument();
  });

  // it("should render error message 'Email or Password incorrect' when try to login empty value for email", async () => {
  //     render(
  //   <Provider>
  //     <Login />
  //   </Provider>
  // );
  //   const testErrorMessage = 'THIS IS A TEST FAILURE'

  //   const inputEmail = screen.getByPlaceholderText("Email");
  //   userEvent.type(inputEmail, "joaopaulo@email.com");
  //   expect(inputEmail).toHaveValue("joaopaulo@email.com");

  //   const inputPassword = screen.getByPlaceholderText("Password");
  //   userEvent.type(inputPassword, "123456");
  //   expect(inputPassword).toHaveValue("123456");

  //   server.use(
  //     rest.post("/login", async (req, res, ctx) => {
  //       return res(
  //         ctx.status(404),
  //         ctx.json({ message: testErrorMessage })
  //       );
  //     })
  //   );

  //   userEvent.click(screen.getByRole("button", { name: "Login" }));

  //   const errorMessage = await screen.findByText(
  //     "Email or Password are incorrect"
  //   );
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
