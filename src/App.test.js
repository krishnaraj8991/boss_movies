import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAtrr } from "./Utils";

const setup = (props = {}) => {
  const component = shallow(<App />);
  return component;
};

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  it("should render Header", () => {
    // const component = shallow(<Header />);
    const wrapper = findByTestAtrr(component, "Header");
    expect(wrapper.length).toBe(1);
  });
  it("Should render MovieList", () => {
    const logo = findByTestAtrr(component, "MovieList");
    expect(logo.length).toBe(1);
  });
  it("Should render Footer", () => {
    const logo = findByTestAtrr(component, "Footer");
    expect(logo.length).toBe(1);
  });
});
