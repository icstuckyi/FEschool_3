class ViewManager {
  // textManager가 없으면 ViewManager는 쓸모가 없다. (ViewManager는 textManager에 의존하고 있다.)
  //  = 의존 주입이라고 합니다.
  constructor(textManager, options) {
    // 예외처리 하기
    if (textManager.constructor !== TextManager) {
      // 사용자 정의 에러.
      // throw Error: 에러메시지를 반환하고 프로그램을 종료합니다.
      throw Error("TextManager 객체를 전달해야합니다!");
    }
    // 3개 중 하나라도 빠지게 되면(부정연산자(!) 붙임) 에러 반환
    if (!options.viewerEl || !options.btnEl || !options.inpTxt) {
      throw Error("필요한 요소중에 빈 값이 존재합니다.");
    }

    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;
    console.log(options);
    options.btnEl.addEventListener("click", () => {
      this.changeValue();
    });
  }
  changeValue() {
    this.textManager.setValue({ data: this.inpTxt.value });
    this.updateView();
  }
  updateView() {
    this.viewerEl.textContent = this.textManager.getValue();
  }
}
