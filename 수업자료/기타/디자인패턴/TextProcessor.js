// 입력한 테스트를 HTML문법으로 표현합니다.

class TextProcessor {
  constructor() {
    this.data = [];
  }

  // 시작 태그, 닫는 태그를 생성합니다.
  start(data) {
    data.push("<ul>");
  }
  end(data) {
    data.push("</ul>");
  }
  // li 아이템을 생성합니다.
  addListItem(data, item) {
    data.push(`<li>${item}</li>`);
  }

  // 입력한 값을 data에 저장합니다.
  appendList(items) {
    this.start(this.data);
    for (let item of items) {
      this.addListItem(this.data, item);
    }
    this.end(this.data);
  }
  // data 초기화
  clear() {
    this.data = [];
  }
  // 저장된 data를 콘솔로 출력합니다.
  showData() {
    console.log(this.data.join("\n"));
  }
}
// myTp 라는 인스턴스 생성
const myTp = new TextProcessor();

myTp.appendList(["hello", "JS", "World"]);
myTp.showData();
