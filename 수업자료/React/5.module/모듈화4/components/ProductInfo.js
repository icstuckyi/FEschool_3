import productData from "../data/data.js";

function ProductInfo(props) {
  // ProductInfo({item})
  // console.log(props.item);
  return (
    <li>
      <img
        src={"http://test.api.weniv.co.kr/" + props.item["thumbnailImg"]}
        alt=""
      />
      <p>{props.item["productName"]}</p>
      <p>하트</p>
      <p>{parseInt((props.item["price"] + 10000) * 0.2)}</p>
      {/*price에 10000원 올리고 80% 할인하기, parseInt로 소수점 없애기*/}
    </li>
  );
}

export default ProductInfo();
