export const FoodMenu = ({ menus }) => {
  console.log(menus);
  return (
    <div>
      <h1
        style={{
          color: "salmon",
        }}
      >
        오늘의 메뉴
      </h1>
      <ul>
        {menus.map((dish) => (
          <li key={dish.id}>
            오늘의 메뉴는 {dish.menu}이고, 사이드 메뉴는 {dish.side}다!
          </li>
        ))}
      </ul>
    </div>
  );
};

// => < key={dish.id}> id는 숫자가 변하기 때문에 꼭 key={dish.id}
// 키를 넣어서 작업할것

// *map
// => 배열 안의 요소를 새로운 배열로 만들어줌
// => map (변수 => 새로 만들 배열)

// *key
// => key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는것을 돕는다.
