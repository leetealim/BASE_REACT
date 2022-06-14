import TagRule from "./components/1_jsxRule/tagRule";
import ClassComponent, {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/ClassComponent";
import { FoodMenu } from "./components/2_component/foodMenu";

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

      <FoodMenu />
    </div>
  );
};

export default App;
// => 내보내기
