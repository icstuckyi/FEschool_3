//연습문제
fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=>console.log(data))

// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)
// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.
// 4. error 처리를 해주세요. 

fetch('http://test.api.weniv.co.kr/mall')
    .then(data=>data.json())
    .then(data=>console.log(data))
    .then(data=>console.log(data.map(a=>a.productName)))
    .then(data=>console.log(data.filter(b=>b.price>=10000)))
    .then(h2.appendChild, p.appendChild 사용)
    .catch(alert("에러!"));

//모범답안1: then 문법 사용

fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    .then(productData=>productData)
    .then(productData => {
        console.log(productData.map(item => item.productName));
        return productData;
    })
    .then(productData => {
        console.log(
                productData
                    .map(item => item.price)
                    .filter(item => item >= 10000)
            )
        return productData;
    })
    .then(productData => {
        const main = document.createElement("main");
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트
        console.log(error);
    })

// 5. 모범답안2: async, await(함수형 프로그래밍)으로 고친 것. 
async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));

    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}

getData()


// 아래 내용 손코딩 해보세요. 
/*
new Promise((resolve, reject) => {
        //code
    })
    .then(result => result)
    .then(result => result)
    .catch(err => err)
    .finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)


///////////////////////////
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 실행!!')
})

console.log(p)

/////////////////////////
fetch('http://test.api.weniv.co.kr/mall')
    .then(productData=>productData.json())
    .then(productData=>productData)
    .then(productData => {
        console.log(productData.map(item => item.productName));
        return productData;
    })
    .then(productData => {
        console.log(
                productData
                    .map(item => item.price)
                    .filter(item => item >= 10000)
            )
        return productData;
    })
    .then(productData => {
        const main = document.createElement("main");
        productData.forEach(item => {
            const ProductCard = document.createElement("article");
            const productName = document.createElement("h2");
            const productPrice = document.createElement("p");

            productName.textContent = `상품명 : ${item.productName}`;
            productPrice.textContent = `가격 : ${item.price}`;

            ProductCard.appendChild(productName);
            ProductCard.appendChild(productPrice);

            main.appendChild(ProductCard);
        })
        document.body.appendChild(main);
    })
    .catch(error => {
        alert('에러!')
        // error page로 리다이렉트
        console.log(error);
    })

////////////////////
// async는 Promise의 문법적 설탕이다.
async function f() {
    return 100;
}

f().then(alert); // 100


////////////////////
async function f() {
    return 'hello world';
}
console.log('!')
f()
.then(메시지 =>{
    alert(메시지)
    return 메시지.split(' ')[0]
})
.then(메시지 =>{
    alert(메시지)
    return 메시지[0]
});
console.log('!!')


////////////////////
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000)
    });

    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
    alert(result); // "완료!"
}

f();



////////////////////////

async function getData(){
    const response = await fetch(`http://test.api.weniv.co.kr/mall`);
    const productData = await(response.json());
    console.log(productData);
    console.log(productData.map((item) => item.productName));
    console.log(productData.map((item) => item.price).filter((item) => item > 10000));

    const main = document.createElement("main");
    productData.forEach(item => {
        const ProductCard = document.createElement("article");
        const productName = document.createElement("h2");
        const productPrice = document.createElement("p");

        productName.textContent = `상품명 : ${item.productName}`;
        productPrice.textContent = `가격 : ${item.price}`;

        ProductCard.appendChild(productName);
        ProductCard.appendChild(productPrice);

        main.appendChild(ProductCard);
    })
    document.body.appendChild(main);
}

getData()