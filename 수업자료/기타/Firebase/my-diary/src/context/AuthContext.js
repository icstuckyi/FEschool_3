// 컨텍스트를 생성해서 유저의 로그인 정보를 저장하려 한다.
import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

// context 객체를 생성합니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      // 전개구문: state에 없었던 값은 추가되고, 있었던 값은 업데이트 된다.
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    case "authIsReady":
      return { ...state, user: action.payload, isAuthReady: true };
    default: // 초기값은 null
      return state;
  }
};

// children 자리에 구독할 컴포넌트들을 넣는다.
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    // onAuthStateChanged: 유저의 인증정보 변화를 관찰하는 함수(옵저버)입니다.
    // onAuthStateChanged 함수는 Unsubscribe 함수를 반환합니다.
    // 새로고침 후 옵저버는 1번만 호출하면 되기 때문에 useEffect 끝에 빈 배열을 넣어줍니다.
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: "authIsReady", payload: user });
      unsubscribe();
    });
  }, []);

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
