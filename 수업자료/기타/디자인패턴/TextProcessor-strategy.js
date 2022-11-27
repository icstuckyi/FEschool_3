// 입력한 테스트를 HTML문법으로 표현합니다.
// 입력한 텍스트를 마크다운 문법으로 표현합니다.

// 포맷 선택
const outputFormat = {
  markdown: 0,
  html: 1,
};

// 추상 클래스(하이레벨) 정의
// 하이레벨: 모든 로우레벨이 동일하게 상속받는 동작을 정의합니다.
// 다른 언어, 예를 들어 JAVA에서는 인터페이스 라고 표현하기도 합니다.
// 이렇게 클래스들의 공통적인 내용을 뽑아 상위클래스를 만들어내는 것을 "추상화" 라고 합니다.
class ListStrategy {
  start(data) {}
  end(data) {}
  addListItem(data, item) {}
}

// 로우레벨 정의
// 기능을 클래스로 분리하고 있습니다. 이러한 작업을 "캡슐화"라고 합니다.
class HtmlListStrategy extends ListStrategy {
  start(data) {
    data.push("<ul>");
  }
  end(data) {
    data.push("</ul>");
  }
  addListItem(data, item) {
    data.push(`<li>${item}</li>`);
  }
}
// 마크다운 리스트 형태 구현(마크다운 문법상 start와 end는 필요가 없고, *로 item앞에 점찍어줌)
class MarkdownListStrategy extends ListStrategy {
  // 하이레벨을 상속받아서 새롭게 기능을 구현하고 있습니다. 오버라이딩입니다.
  // 이렇게 인터페이스를 상속받는 여러 객체들이 오버라이딩과 같은 방법으로 다양한 형태로 구현되는 특징을 "다형성"이라고 합니다.
  addListItem(data, item) {
    data.push(` * ${item}`);
  }
}

class TextProcessor {
  constructor(outputFormat) {
    this.data = [];
    this.setOutputFormat(outputFormat);
  }

  setOutputFormat(format) {
    // 경우에 따라 인스턴스 생성
    switch (format) {
      case outputFormat.markdown:
        this.listStratagy = new MarkdownListStrategy();
        break;
      case outputFormat.html:
        this.listStratagy = new HtmlListStrategy();
        break;
    }
  }

  // 입력한 값을 data에 저장합니다.
  appendList(items) {
    this.listStrategy.start(this.data);
    for (let item of items) {
      this.listStrategy.addListItem(this.data, item);
    }
    this.listStrategy.end(this.data);
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
// myTp 라는 인스턴스 생성하고 마크다운 문법으로 포맷 지정
const myTp = new TextProcessor(outputFormat.markdown);

myTp.appendList(["hello", "JS", "World"]);
myTp.showData();

// 마크다운이었던 포맷을 html로 바꾸기
myTp.clear();
myTp.setOutputFormat(outputFormat.html);
