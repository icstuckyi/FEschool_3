import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Posts from "./posts/Posts";
import About from "./about/About";
import "./main.css";

export default function Main() {
  const { isLogin } = useContext(UserContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/weniv/react-blog/react/public/posts.json"
      )
      .then((json) => {
        // console.log(json)
        // console.log(json.data)
        setPosts(json.data);
      });
  }, []);

  return (
    <main>
      {/* axios를 사용하면 처음에 undefined를 던져주므로 map을 돌렸을때 에러가 난다. 그래서 한번 걸러준다. */}
      {posts === undefined ? (
        <></>
      ) : (
        <div class="max-width">
          <h2 class="a11y-hidden">Post</h2>
          <ul class="posts">
            {/* components array로 생성 */}
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : <></>}
        </div>
      )}
    </main>
  );
}
