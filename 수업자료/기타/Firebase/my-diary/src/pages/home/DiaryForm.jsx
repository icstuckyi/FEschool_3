import React, { useState, useEffect } from "react";
import { useFirestore } from "./../../hooks/useFirestore";

export default function DiaryForm({ uid }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  // useFirestore이 반환하는 컬렉션 이름은 마음대로 지정해도 된다.
  const { addDocument, response } = useFirestore("myDiary");

  const handleData = (event) => {
    if (event.target.id === "tit") {
      setTitle(event.target.value);
    } else if (event.target.id === "txt") {
      setText(event.target.value);
    }
  };

  // firebase에서 성공 응답이 오면(유저가 일기를 작성후 제출을 누른 것이 성공적으로 기록되면) 일기 input form을 비워준다.
  // response.success되었을 때만 useEffect가 작동하도록 한다. (그렇지 않으면 form에 재작성을 할 수 없음)
  useEffect(() => {
    if (response.success) {
      setTitle("");
      setText("");
    }
  }, [response.success]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, text);
    addDocument({ uid, title, text });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>일기 쓰기</legend>

          <label htmlFor="tit">일기 제목</label>
          <input
            type="text"
            id="tit"
            required
            value={title}
            onChange={handleData}
          />

          <label htmlFor="txt">일기 내용</label>
          <textarea
            id="txt"
            required
            value={text}
            onChange={handleData}
          ></textarea>

          <button>저장하기</button>
        </fieldset>
      </form>
    </>
  );
}
