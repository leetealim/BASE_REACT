import { FoodMenu } from "../2_component/FoodMenu";

export const Menus = () => {
  return;
  <>
    {/* *props
      => <컴포넌트 프롭스명 = "값" /> */}

    <h3>아침메뉴</h3>
    <FoodMenu menuName="계란밥" sideMenu="물" />

    <h3>점심메뉴</h3>
    <FoodMenu menuName="큐브스테이크" sideMenu="사이다" />

    <h3>저녁메뉴</h3>
    <FoodMenu menuName="스시" sideMenu="정종" />
  </>;
};
