import React from "react";
import styled from "styled-components";

const PageBlockStyles = styled.div`
  .main {
    // Positioning
    position: absolute;
    top: 0;
    left: 2.4rem;
    width: 32.7rem;
    height: 9.6rem;

    // Display and box model
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2.4rem;

    // Color
    background-color: #ff0000;
    color: white;

    // Text
    font-family: "RobotoSlab";
    font-size: 1.8rem;

    // Other

    .robbold {
      font-weight: bold;
      margin-left: 0.8rem;
    }
  }
`;

export default function PageBlock() {
  return (
    <PageBlockStyles>
      <div className="main">
        Brian <span className="robbold">Speight</span>
      </div>
    </PageBlockStyles>
  );
}
