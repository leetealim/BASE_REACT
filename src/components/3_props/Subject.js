// export const Subject = ({ sub }) => {
//   console.log(sub[0].SubjectTitie);
//   return (
//     <div>
//       <h3>수업 과목 : {sub[0].SubjectTitie}</h3>
//       <h3>수업 과목 : {sub[1].SubjectTitie}</h3>
//       <h3>수업 과목 : {sub[2].SubjectTitie}</h3>
//       <h3>수업 과목 : {sub[3].SubjectTitie}</h3>
//       <h3>수업 과목 : {sub[4].SubjectTitie}</h3>
//     </div>
//   );
// };

export const Menu = ({ me }) => {
  return (
    <ul>
      <li>오늘의 메뉴는{me[0].menu_1}</li> <li>사이드 메뉴는{sid_1}</li>
      <li>오늘의 메뉴는{me[1].menu_1}</li> <li>사이드 메뉴는{sid_1}</li>
      <li>오늘의 메뉴는{me[2].menu_1}</li> <li>사이드 메뉴는{sid_1}</li>
      <li>오늘의 메뉴는{me[3].menu_1}</li> <li>사이드 메뉴는{sid_1}</li>
      <li>오늘의 메뉴는{me[4].menu_1}</li> <li>사이드 메뉴는{sid_1}</li>
    </ul>
  );
};
