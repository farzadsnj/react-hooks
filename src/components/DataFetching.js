import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [IdFromButton, setIdFromButton] = useState(1);

  const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${IdFromButton}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [IdFromButton]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick} type="button">
        Fetch Data
      </button>
      <div>{posts.title}</div>
      {/* <ol>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ol> */}
    </div>
  );
}

export default DataFetching;
