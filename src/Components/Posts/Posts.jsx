import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../services/fetch";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <Container>
      <h3>POSTS</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h3>Title {post.id}</h3>
          </Link>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default Posts;
