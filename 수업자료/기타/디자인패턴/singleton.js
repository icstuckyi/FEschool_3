// Singleton 패턴: 오직 하나의 인스턴스만을 생성해야 할 때 필요한 패턴.
// 클래스에게 딱 하나의 인스턴스만을 생성하도록 강제하는 방법이 있을까?

class Singleton {
  constructor(data) {
    this.data = data;
    // this.constructor(Singleton이라는 생성자함수)의 instance 프로퍼티에 접근하겠다. (instance는 아직 생성되지 않은 프로퍼티)
    // 즉 const instance는 아직 undefined
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
}

const test = new Singleton();
const test2 = new Singleton();

// true가 나온다! (if문 안에서 결국 똑같은 인스턴스만 가리키게 됨)
console.log(test === test2);
