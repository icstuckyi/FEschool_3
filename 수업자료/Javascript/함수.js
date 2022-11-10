//////////////함수의 구조/////////////////

// 파선아실
function 안녕(파라미터) {
  console.log(파라미터);
  console.log("hello world");
  return 100;
}

let 아규먼트 = 1000;
안녕(아규먼트);
console.log(안녕(아규먼트) + 안녕(아규먼트));

/*
console.log('hello world')
hello world
undefined

console.log(console.log('hello world'))
hello world
undefined
undefined
*/

// 파선아실
function 안녕() {
  console.log("hello");
}

안녕();
console.log(String(안녕()) + String(안녕()));

// 파선아실
// return은 반환
function 안녕() {
  console.log("hello");
  return 10;
}

안녕();
console.log(String(안녕()) + String(안녕()));

// 파선아실
function 안녕() {
  console.log("hello");
  // return undefined
  return;
}

안녕();
console.log(String(안녕()) + String(안녕()));

function 안녕() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

안녕();

// 질의응답
function 안녕() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  if (특정조건) {
    return 100;
  } else {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    return 1000;
  }
  return;
  // 아래 코드는 실행하지 않습니다.
}

console.log(안녕());

console.log(String(console.log("hello")) + String(console.log("hello"))); // undefinedundefined

// 이렇게 작성하시면 안됩니다.
function sum(a, b) {
  return a * b;
}

console.log(sum(10, 20));

//문제. func을 얼마나 실행해야 1억을 받을 수 있을까요?!!
const func = () => {
  return () => {
    return () => {
      return () => {
        return () => {
          console.log("축하드립니다. 1억원을 드립니다.");
          return 100000000;
        };
      };
    };
  };
};
/*
정답: func()()()()();
함수에서 return은 그냥 그 다음 것들을 반환한 후 그 함수의 실행을 종료한다고 생각하시면 편할 거 같아요
여기서의 리턴값은 함수구조 () => {} 였고, 함수의 실행은 ()을 통해 합니다.
하나하나 리턴값으로 함수를 받아가면서 까다보면 1억원이 있었습니다아~
*/

//////////////함수를 사용하는 이유/////////////////

// 1. 재사용성 -> 재사용하지 않을 코드는 함수로 정의하나요? -> 가능하면 함수로 만드는 것을 권합니다.
// 2. 유지보수 -> 3번 사항 + 변수의 스코프 제한
// 3. 구조 파악이 용이하다.
// 4. 추상화로 개발하는 것이 객체지향 프로그래밍(OOP, Object Oriented Programming) 언어의 언어 철학에 맞다.

/*
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄
*/

//////////////함수의 다양한 형태/////////////////
function 함수1(a, b, c) {
  return a + b + c;
}

// 콘솔창의 기능이에요. 마지막 라인에 한하여 console.log()를 찍지 않아도 return값을 console창에 출력해줍니다.
함수1(10, 20, 30);
함수1(10, 20, 50);

// 다음 실행 값은?
console.log(함수1(10, 20, 30));
console.log(함수1(10, 20, 50));

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40); // Error를 뿜지 않습니다. 60

//객체를 파라미터로 이용했을 때 초기값을 입력하는 방법//
// 깔끔함, 사이트에 나와 있음
function func2({ a = 2, b = 1, c = 3 } = {}) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(func2({ a: 20, b: 30, c: 10 }));

// 이렇게 해도 됨
function func3({ a, b, c } = { a: 2, b: 1, c: 3 }) {
  console.log(a, b, c);
  return a + b + c;
}
console.log(func3({ a: 20, b: 30, c: 10 }));

////// 재귀 함수 //////
// 재귀함수 <-> 반복문
function factorial(n) {
  if (n <= 1) {
    // 종료조건이 없으면 무한반복이 됩니다.
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(5);

let result = 1;
for (let i = 2; i < 6; i++) {
  result *= i;
}
console.log(result);

/*
5! = 5 * 4 * 3 * 2 * 1
                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

// 재귀함수로 문자열 뒤집는 코드 작성해보기.
function reverse(txt) {
  if (txt.length === 1) {
    return txt;
  }
  return reverse(txt.slice(1)) + txt[0];
}

txt = "hello world";
result = "";
for (const i of txt) {
  result = i + result;
}

console.log(result);
