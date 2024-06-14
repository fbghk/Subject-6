//! 비동기식 호출을 위한 배열 생성
const test = (backnumber, title, position) =>{
  const profile = {
    userId: backnumber,
    title: title,
    body: position,
  }
}

//! jsonplaceholder 불러오기
fetch('https://jsonplaceholder.typicode.com/posts'), {
  method: 'post',
  body: JSON.stringify(profile),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}
//! 출력 코드
  .then((response) => response.json())
  .then((json) => console.log(json));