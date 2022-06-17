import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled.div`
  i {
    color: red;
  }
  svg {
    color: blue;
  }
`;

export const Icons = () => {
  return (
    <Icon>
      <i class="fa-solid fa-hashtag"></i>
      <FontAwesomeIcon icon={faPlay} />
      {/* <FontAwesoneIcon icon={} /> */}
    </Icon>
  );
};
