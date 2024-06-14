// //! HTML 출력 시 사용, tagcomponent
// const tagComponent = (tagName, textNode) => { //*매개변수 뚫기
//   return `<${tagName}>${textNode}</${tagName}>`;
// };




//! 비동기식 호출을 위한 배열 생성
const test = (backnumber, title, position) =>{
  const profile = {
    userId: backnumber,
    title: title,
    body: position,
  }

  const pitcherA = profile(1, "윤영철", "좌투수");
  const pitcherB = profile(4, "박명근", "우투수");
  const pitcherC = profile(8, "김정운", "우투수");
  const pitcherD = profile(11, "김서현", "우투수");
  const pitcherE = profile(15, "황준서", "좌투수");
  const catcherA = profile(2, "김동헌", "우투우타");
  const catcherB = profile(25, "김범석", "우투우타");
  
}



//! jsonplaceholder 불러오기
fetch('https://jsonplaceholder.typicode.com/posts'), {
  method: 'post',
  body: JSON.stringify(),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
//! 출력 코드
  .then((response) => response.json())
  .then((json) => console.log(json));