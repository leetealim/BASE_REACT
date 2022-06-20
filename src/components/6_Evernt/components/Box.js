// import { useState } from "react";

import { useState } from "react";

// export const Box = () => {
//   const [num, setNum] = useState(0);
//   retrun(
//     <div>
//       <wrap>
//         <Button />
//       </wrap>
//     </div>
//   );
// };

export const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
`;

export const changeColor = () => {
  const [color, setColor] = useState("gold");
  // const [bool,setbool] = useState(true);
  const handleColor = () => {
    if (bool === true) {
      setColor("teal");
      setBool(false);
    } else if (bool === false) {
      setColor("gold");
      setBool(true);
    }
  };
  return <Box bgColor={color} onClick={handleColor} />;
};
