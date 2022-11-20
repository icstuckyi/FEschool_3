// 생성자함수 실습 - 음식 배열을 전달하면 배열안에서 랜덤으로 메뉴를 뽑아내는 로봇객체의 생성자를 만들어보세요.
const food = ["초밥", "짬뽕", "김치", "피자", "타코"];
function Robot(array) {
  this.array = array;
  const chosenFood = this.array[Math.floor(Math.random() * food.length)];
  /* return 뒤에 객체가 오면 생성자함수는 해당 객체를 반환해주고, 
  이외의 경우에는 this가 반환된다. 
  // return chosenFood; -> this(인스턴스) 반환
  // console.log(chosenFood); -> new 연산자와 함께 함수를 호출했기 때문에 Robot 함수가 실행되며 console.log()가 작동하게 된다. (인스턴스를 실행하지 않아도, 생성자함수가 인스턴스를 만들때 실행돼서 콘솔이 찍힌다.)*/
}
let robot1 = new Robot(food);

// 대엽님 답안
const menu = ["짜장면", "짬뽕", "탕수육", "깐풍기", "유린기", "볶음밥"];
function NewFactory(food) {
  this.food = food;
  const chosenFood = food[Math.floor(Math.random() * food.length)];
  this.choice = function () {
    return `이번에는 ${chosenFood}을 드시면 됩니다.`;
  };
}
let whatToEat = new NewFactory(menu);
console.log(whatToEat.choice());

// 프로토타입 실습 - 프로토타입을 이용해서 음식로봇을 리팩토링하세요.

function FoodPicker(foodNames) {
  this.menu = foodNames;
  // this.sayMenu = function () {
  //     console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
  // }
}

FoodPicker.prototype.sayMenu = function () {
  console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
};

let menuBot = new FoodPicker(["짜장면", "청국장", "김치찌게"]);
let menuBot2 = new FoodPicker(["짜장면", "청국장", "김치찌게"]);

// 프로토타입을 사용하지 않았을때 인스턴스들의 메소드를 비교해보세요!!!

// function NewFactory(name) {
//     this.name = name;
//     this.sayYourName = function () {
//         console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
//     }
// }

// const robot1 = new NewFactory('게리');
// const robot2 = new NewFactory('뮤라');
// const robot3 = new NewFactory('알리');

// function NewFactory2(name) {
//     this.name = name;
// }

// NewFactory2.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }

// 메뉴 추천 로봇을 프로토타입으로 업그레이드하기

// function FoodPicker(foodNames) {
//     this.menu = foodNames;
//     // this.sayMenu = function () {
//     //     console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
//     // }
// }

// FoodPicker.prototype.sayMenu = function () {
//     console.log(this.menu[Math.floor(Math.random() * this.menu.length)]);
// }

// let menuBot = new FoodPicker(['짜장면', '청국장', '김치찌게']);
// let menuBot2 = new FoodPicker(['짜장면', '청국장', '김치찌게']);

// const me = {
//     name: '웨이드',
//     address: '제주도 제주시 인다 1길',
//     phoneNum: '010-8001-6536',
//     canWalk: function () {
//         console.log('웨이드가 걷는다.');
//     },
//     teaching: function (student) {
//         student.levelUp();
//     }
// }

// const student = {
//     level: 1,
//     levelUp: function () {
//         this.level++;
//     }
// }

// 위의 객체를 생성자 함수로 전환해 봅시다!
function Me(name, address, phoneNum) {
  this.name = name;
  this.address = address;
  this.phoneNum = phoneNum;
}

Me.prototype.canWalk = function () {
  console.log("웨이드가 걷는다.");
};

Me.prototype.teaching = function (student) {
  student.levelUp();
};

const me = new Me("웨이드", "제주시", "1010101010");

function Student(level) {
  this.level = level;
}

Student.prototype.levelUp = function () {
  this.level++;
};

const student = new Student(1);
