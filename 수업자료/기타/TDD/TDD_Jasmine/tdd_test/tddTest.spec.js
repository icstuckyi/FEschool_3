// describe는 자스민 라이브러리 함수입니다.
// unit-test를 할 수 있는 것은 오직 함수뿐입니다.
// describe 함수: 테스트할 유닛들의 모음
// describe의 1번째 인자: 테스트할 유닛모음 설명, 2번째 인자: 콜백함수
describe("자스민 테스트입니다.", () => {
  // it 함수: 함수의 테스트 유닛입니다.
  // it의 1번째 인자: 함수의 설명, 2번째 인자: 테스트할 함수를 전달
  it("더하기 1을 하는 함수입니다.", () => {
    const num = 30;
    // expect: 기대식. 실행할 함수의 결과값을 인자로 전달합니다.
    // toBe: 매쳐 함수. 내가 기대한 결과가 일치하는지 판단하는 함수.
    expect(plusOne(num)).toBe(num + 1);
  });
});
