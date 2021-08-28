import React, { useEffect, useState } from "react";
import { fetchSinglePosts, fetchAuthorsInfo } from "../../services/fetch";
import Container from "react-bootstrap/Container";

const SinglePost = (props) => {
  const [singPost, setSinglePost] = useState([]);
  const [singUser, setSingUser] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    fetchSinglePosts(id)
      .then((post) => {
        setSinglePost(post);
        return post.userId;
      })
      .then((userId) => {
        fetchAuthorsInfo(userId).then((user) => {
          console.log(user);
          setSingUser(user);
        });
      });
  }, [id]);

  return (
    <Container>
      <h3>SINGLE POST TITLE {id}</h3>
      <h4>{singUser.name}</h4>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
        eligendi voluptates ad qui natus pariatur! Sunt at provident deleniti
        accusamus similique. Quidem provident et quasi a laborum! Dicta,
        doloribus? Voluptatum iusto, tempore, placeat vel quo inventore ea
        quibusdam sed incidunt corrupti hic illo nemo ratione, temporibus qui
        voluptas voluptatem autem. Quisquam tempore illo hic quod dolorum
        quaerat quis nulla.
      </div>
      <hr />
    </Container>
  );
};

export default SinglePost;
