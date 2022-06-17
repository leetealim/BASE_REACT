import TagRule from "./components/1_jsxRule/tagRule";
import ClassComponent, {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/ClassComponent";
// import { FoodMenu } from "./components/2_component/FoodMenu";
import { Subject } from "./components/3_props/Subject";
import { conDb, subjectDb, todayMenu } from "./db";
import { TodayMenu } from "./components/3_props/TodayMenu";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { Contents } from "./components/4_map/Contents";
import { GlobalStyeld } from "./styles/GlobalStyeld";
import { ConEx } from "./components/4_map/ConEx";
// const subjectDb = [
//   {
//     id: 0,
//     SubjectTitie: "HTML",
//   },
//   {
//     id: 1,
//     SubjectTitie: "Css",
//   },
//   {
//     id: 2,
//     SubjectTitie: "Js",
//   },
//   {
//     id: 3,
//     SubjectTitie: "Node",
//   },
//   {
//     id: 4,
//     SubjectTitie: "React",
//   },
// ];

const App = () => {
  // const menu = "텐동";
  // => 변수를 예전에는 위로 올렸는데 안쪽에다가 적어야됨

  return (
    <div>
      <GlobalStyeld />
      {/* <TagRule />
      => 1일차 */}

      {/* <FnComponent />
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}

      {/* <Subject sub={subjectDb} />
      <Subject me={menu_1} />
      <Subject me={sid_1} /> */}

      {/* => js에서 전달할떈 무조건 중괄호{} 넣어주기 */}
      {/* <TodayMenu menu={todayMenu} /> */}
      {/* 3일차 */}

      {/* <FoodMenu menus={todayMenu} /> */}
      {/* <Contents /> */}
      {/* 4일차 */}

      <ConEx con={conDb} />
    </div>
  );
};

export default App;
// => 내보내기
