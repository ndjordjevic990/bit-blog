import React, { useEffect, useState } from "react";
import {
  fetchSinglePosts,
  fetchAuthorsInfo,
  getMorePosts,
} from "../../services/fetch";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const [singPost, setSinglePost] = useState([]);
  const [singUser, setSingUser] = useState({});
  const [morePosts, setMorePosts] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    fetchSinglePosts(id)
      .then((post) => {
        setSinglePost(post);
        return post.userId;
      })
      .then((userId) => {
        fetchAuthorsInfo(userId).then((user) => {
          setSingUser(user);
        });

        getMorePosts(userId).then((postsArr) => {
          setMorePosts(postsArr);
        });
      });
  }, [id]);

  return (
    <Container>
      <h3>SINGLE POST TITLE {id}</h3>
      <Link to={`/users/${singUser.id}`}>
        <h3>{singUser.name}</h3>
      </Link>
      <div>{singPost.body}</div>
      <hr />
      <div>
        <h5>3 more posts from same author</h5>
        {morePosts.map((morePost) => {
          return (
            <Link className="text-decoration-none" to={`/posts/${morePost.id}`}>
              <p>Title {morePost.id}</p>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default SinglePost;
