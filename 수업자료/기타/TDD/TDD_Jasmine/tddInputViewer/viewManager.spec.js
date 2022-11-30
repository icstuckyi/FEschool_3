describe("클릭이벤트 및 뷰를 담당하는 클래스입니다.", () => {
  it("viewManager의 인자로 textManager의 인스턴스가 전달되는지 확인합니다.", () => {
    // viewManager는 textManager에게 의존하고 있으므로 textManager를 선언해줘야 한다.
    const textManager = null;
    const btnEl = document.createElement("button");
    const viewerEl = document.createElement("h2");
    const inpTxt = document.createElement("input");
    // actual: 인자가 진짜로 들어갔는지 확인하는 자스민 함수입니다.
    // 화살표 함수로 만들어서 ViewManager에서 만들어진 인스턴스를 actual 에 할당합니다.
    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    expect(actual).toThrowError();
  });

  it("viewManager의 인자로 HTML요소들이 잘 전달되는지 확인합니다.", () => {
    const textManager = new TextManager();
    // 일부러 null값을 넣어 실패한다.
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    // toThrowError: 진짜 에러가 throw되고 있는지 아닌지 체크한다.
    expect(actual).toThrowError();
  });

  // 초기화
  const textManager = new TextManager(),
    btnEl = document.createElement("button"),
    viewerEl = document.createElement("h2"),
    inpTxt = document.createElement("input"),
    viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

  it("click 이벤트가 발생했을 경우 changeValue 함수가 실행되는지 확인합니다.", () => {
    // spyOn: 특정 객체의 메서드를 감시합니다.
    // viewManager의 changeValue 메서드를 감시하고 있다가 정말 값이 바뀌었는지 아닌지 체크한다.
    spyOn(viewManager, "changeValue");
    btnEl.click();
    // toHaveBeenCalled: 함수가 과거에 호출된 적이 있는지 확인합니다.
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("changeValue 함수를 통해 updateView 함수가 호출되는지 확인힙니다.", () => {
    spyOn(viewManager, "updateView");
    viewManager.changeValue();
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
