// 컨텍스트를 생성해서 유저의 로그인 정보를 저장하려 한다.

import { createContext, useReducer } from "react";

// context 객체를 생성합니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      // 전개구문: state에 없었던 값은 추가되고, 있었던 값은 업데이트 된다.
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };

    default: // 초기값은 null
      return state;
  }
};

// children 자리에 구독할 컴포넌트들을 넣는다.
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  // state값이 어떻게 변하는지 확인하기
  console.log("state: ", state);
  return (
    // ...state -> 회원의 상태정보
    // dispatch -> 회원의 상태를 변경하는 함수(set함수와 비슷)
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
