import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Radio from "../../components/Radio";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Radio name="radio" value="1" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <input
        class="sc-bdfBwQ eDQPNu"
        name="radio"
        scale="md"
        type="radio"
        value="1"
      />
    </DocumentFragment>
  `);
});
