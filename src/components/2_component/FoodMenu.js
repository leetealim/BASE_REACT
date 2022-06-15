import "../../styles/style.css";

export const FoodMenu = ({ menuName, sideMenu }) => {
  // console.log(props);
  // => props(프롭스)는 오브젝트 형태로 가져오기 때문에 매개변수에 중괄호를 적고 작성할것

  console.log(menuName);
  return (
    <div>
      {/* 오늘의 메뉴는 <i>{menuName}</i>
      <br></br>
      사이드 메뉴는 <i>{sideMenu}</i> */}

      {/* * 오브젝트형식으로 전달해주면됨
       * 형태 : ({menuName}) props를 사용할땐 중괄호를 꼭 붙이기
       * jsx안쪽에 변수를 사용할 시 중괄호를 사용해줄것 */}
      {/* 오늘의 메뉴는 <i>{menuName}</i> 사이드 메뉴는 <i>{sideMenu}</i>
      오늘의 메뉴는 <i>{menuName}</i> 사이드 메뉴는 <i>{sideMenu}</i> */}
      <div>
        오늘의 메뉴는 <i className="menu"> {menuName} </i> 사이드 메뉴는{" "}
        <i ClassName="sideMenu"> </i>
      </div>
    </div>
  );
};
