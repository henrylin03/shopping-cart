import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

it("renders branding and navigation links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const branding = screen.getByText("OneStop");
  const homeLink = screen.getByText(/home/i);
  const shopLink = screen.getByText(/shop/i);
  const bagButton = screen.getByRole("button", { name: /bag/i });

  expect(branding).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(shopLink).toBeInTheDocument();
  expect(bagButton).toBeInTheDocument();
});

// describe("Clicking Header component links navigates user to correct page", () => {
//   render(
//     <MemoryRouter>
//       <Header />
//     </MemoryRouter>
//   );

//   it("clicking on branding navigates user to homepage", () => {});
//  etc etc
// test active route is highlighted
// });

//todo: test that the correct number of items are displayed