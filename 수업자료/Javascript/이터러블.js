//ES6에서 도입된 이터레이션 프로토콜(iteration protocol)은 순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해 ECMAScript 사양에서 정의하여 미리 약속한 규칙이다.
// ES6에서는 순회 가능한 데이터 컬렉션을 이터레이션 프로토콜을 준수하는 이터러블로 통일하여 for ... of 문, 스프레드 문법, 배열 디스트럭처링 할당의 대상으로 사용할 수 있도록 일원화했다.

// 먼말인데??
// 이터러블: String, Array, Map, Set, NodeList, HTMLCollection 등등 (Object X)
// 이터러블은 [Symbol.iterator]를 가진 애들
const str = "string";
console.log(str[0]); // s
// 이터러블로 뭘 할 수 있는데? => for - of 문, 구조 분해 할당, 스프레드 문법
console.log(...str); // 값들의 목록이 출력된다.

const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

arr.forEach((item, i) => {
  console.log(item[0], item[1]);
});

arr.forEach(([a, b], i) => {
  console.log(a, b);
});

// 객체의 경우는 달라요 => 구조 분해 할당, 스프레드 문법, for - of 문은 XXXXXXXXX
// 객체는 객체끼리만 된다.
const schools = [
  {
    name: "Yorktown",
    students: 100,
  },
  {
    name: "Stratford",
    students: 120,
  },
  {
    name: "Washington & Lee",
    students: 200,
  },
  {
    name: "Wakefield",
    students: 300,
  },
];

schools.forEach((school, i) => {
  console.log(school["name"], school["students"]);
});

schools.forEach(({ name, students }, i) => {
  console.log(name, students);
});
