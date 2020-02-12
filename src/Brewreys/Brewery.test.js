import React from "react";
import ReactDOM from "react-dom";
import Brewerys from "./Brewery";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Brewerys />, div);
  ReactDOM.unmountComponentAtNode(div);
});
