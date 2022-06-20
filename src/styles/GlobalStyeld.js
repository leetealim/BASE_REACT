import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
export const mainStyle = {
  color: "salmon",
  fonst_Size: "26px",
};
export const GlobalStyeld = createGlobalStyle`
    ${reset}

    *{
        box-sizing : border-box;
    };

    /* a{
      text-decoration: none;
      color : white;
    } */

    body{
      /* background-color: #555; */
      
    }
`;

// -[x] npm i styled-styledComponents
// => 스타일 컴포넌트 사용

// -[x] npm i styled-resrt
// => 리셋 스타일 사용
