import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useCollection } from "./../../hooks/useCollection";

export default function Home() {
  // DiaryForm에 user를 props로 전달하기 위해 import.
  const { user } = useAuthContext();
  // 현재 유저가 작성한 document만 불러오는 쿼리문.(다른 유저의 일기와 뒤섞이는 것을 막음)
  const { documents, error } = useCollection("myDiary", [
    "uid",
    "==",
    user.uid,
  ]);
  return (
    <main className="styles.cont">
      <aside className="styles.side_menu">
        <DiaryForm uid={user.uid} />
      </aside>
      <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
      </ul>
    </main>
  );
}
