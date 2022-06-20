import styled from "styled-components";

// const Wrap = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #333;
// `;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const ConWrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  background-color: #333, a {
    box-shadow: 0, 0, 10px, rgba(0, 0, 0, 0.2);
    color: white;
  }
`;

const Bg = styled.div`
  height: 350px;
  background-color: lightgray;
`;

const TitleWrap = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 900;
  margin: 20px;
`;

const Desc = styled.p`
  font-weight: 100;
  margin-left: 20px;
  padding-bottom: 30px;
`;

export const ConEx = ({ con }) => {
  console.log(con);
  return (
    <Wrap>
      <ConWrap>
        {con.map((text) => (
          <Con key={text.id}>
            <a href={text.url}>
              <Bg
                style={{
                  background: `url(${text.imgUrl}) no-repeat center / cover`,
                }}
              />
              <TitleWrap>
                <Title>{text.title}</Title>
                <Desc>{text.desc}</Desc>
              </TitleWrap>
            </a>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};

/* *background 축약
=> background : url() no-repeat 위치/크기
첫번째 자리는 이미지 경로 두번째는 반복 세번째는 위치/크기 */



