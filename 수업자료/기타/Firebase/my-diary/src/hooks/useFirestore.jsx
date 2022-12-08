import { appFireStore, timeStamp } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useReducer } from "react";

// state의 초기값
const initState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "isPending":
      return { isPending: true, document: null, error: null, success: false };
    case "addDoc":
      return {
        isPending: false,
        document: action.payload,
        error: null,
        success: true,
      };
    case "error":
      return {
        isPending: false,
        document: null,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
// dispatch: 액션
// type: 타입
// payload: 우리가 관리할 값 자체
export const useFirestore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);
  // collection: 컬렉션의 참조값을 반환하며, 컬렉션의 참조값이 없을 경우 컬렉션을 새롭게 생성해서 반환한다.
  const colRef = collection(appFireStore, transaction);

  const addDocument = async (doc) => {
    // 통신 시작
    dispatch({ type: "isPending" });
    try {
      const createdTime = timeStamp.fromDate(new Date());
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  const deleteDocument = (id) => {};

  return { addDocument, deleteDocument, response };
};
