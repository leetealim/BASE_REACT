import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Menus = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(1) {
    background-color: white;
    font-size: 12px;
    color: #1d1d1d;
  }
  &:nth-child(2) {
    border: 1px solid #fff;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Menus>
        <FontAwesomeIcon icon={faChevronDown} />
      </Menus>
      <Menus>
        <FontAwesomeIcon icon={faBars} />
      </Menus>
    </SHeader>
  );
};
