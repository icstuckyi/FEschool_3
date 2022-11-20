/* 클래스 이전의 비공개 프로퍼티
1. 클로저 이용(모듈 + 사용자정의 혼합패턴)
2. 즉시실행함수(IIFE) 사용
클래스 문법 등장후 비공개 프로퍼티
- 그냥 # 붙여주면 됨 */

// 모듈 패턴
function Person() {
  let age = 30; // 비공개 프로퍼티가 됨

  function innerPerson() {}

  innerPerson.prototype.getAge = function () {
    return age;
  };

  return innerPerson;
}

const PersonFunc = Person();
const person = new PersonFunc();

// IIFE
// (function () {
//   console.log("IIFE");
// })();

const NewPerson = (function () {
  let age = 30;

  function innerPerson() {}

  innerPerson.prototype.getAge = function () {
    return age;
  };

  return innerPerson;
})();

const personWithSecret = new NewPerson();
