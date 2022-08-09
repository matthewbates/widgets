import React from "react";
import { CardContainer } from "./CardElements";

export default function Card({ children }) {
  return (
    <CardContainer>
      <div>{children}</div>
    </CardContainer>
  );
}
