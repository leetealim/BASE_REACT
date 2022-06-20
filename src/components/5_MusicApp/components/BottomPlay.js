import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBottomPlay = styled.div``;
const Profile = styled.div``;
const Avatar = styled.div``;
const NexBtn = styled.div``;

export const BottomPlay = () => {
  return (
    <SBottomPlay>
      <Profile>
        <Avatar />
        <h3>haha</h3>
      </Profile>
      <NexBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NexBtn>
    </SBottomPlay>
  );
};
