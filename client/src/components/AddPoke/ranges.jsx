import styled from "styled-components";

export const StyledRange = styled.input `
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 14px;
  width: 170px;
  border-radius: 40px;
  background: ${() =>
    `linear-gradient(to right, #ffffff 0%, #ffffff, #ff0000, #ff0000 100%);`};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg);
    border-radius: 50%;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.3);
  }

  :hover{cursor: pointer;}

`