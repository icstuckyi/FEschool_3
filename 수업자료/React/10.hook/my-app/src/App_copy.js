import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    console.log("로그인 버튼을 클릭하셨습니다. 로그인 정보가 들어왔습니다.");
  };

  const handleIdInput = (e) => {
    console.log("아이디가 수정되었습니다.");
  };

  const handlePwInput = (e) => {
    console.log("패스워드가 수정되었습니다.");
  };

  return (
    <form action="" onSubmit={handleLoginSubmit}>
      <label>
        아이디 :
        <input type="text" onChange={handleIdInput} />
      </label>
      <label>
        패스워드 :
        <input type="password" onChange={handlePwInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
};

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
