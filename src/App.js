import TagRule from "./components/1_jsxRule/tagRule";
import ClassComponent, {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/ClassComponent";
import { FoodMenu } from "./components/2_component/FoodMenu";

const App = () => {
  // const menu = "텐동";
  // => 변수를 예전에는 위로 올렸는데 안쪽에다가 적어야됨

  return (
    <div>
      {/* <TagRule />
      => 1일차 */}

      {/* <FnComponent_1 />
      <FnComponent_2 /> */}

      {/* <ClassComponent /> */}

      {/* *props
      => <컴포넌트 프롭스명 = "값" /> */}

      <h3>아침메뉴</h3>
      <FoodMenu menuName="계란밥" sideMenu="물" />

      <h3>점심메뉴</h3>
      <FoodMenu menuName="큐브스테이크" sideMenu="사이다" />

      <h3>저녁메뉴</h3>
      <FoodMenu menuName="스시" sideMenu="정종" />

      {/* 2일차 */}
    </div>
  );
};

export default App;
// => 내보내기
