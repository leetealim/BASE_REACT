import styled from "styled-components";
import styled from "styled-components";
import styled from "styled-components";

const div = styled.div`
  width: 500px;
  height: 500px;
  background-color: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const wrap = styled.div`
  width: 100%;
  background-color: gray;
  display: flex;
`;

const h3 = styled.div`
  font-size: 80px;
  font-weight: 900;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = () => {
  return (
    <div>
      <wrap>
        <h3>클릭해보세요!</h3>
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
      </wrap>
    </div>
  );
};
