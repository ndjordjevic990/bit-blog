import React, { useEffect, useState } from "react";
import { fetchSinglePosts, fetchAuthorsInfo } from "../../services/fetch";
import Container from "react-bootstrap/Container";

const SingleAuthor = (props) => {
  // const [singPost, setSinglePost] = useState([]);
  const [singUser, setSingUser] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    fetchAuthorsInfo(id).then((user) => {
      console.log(user);
      setSingUser(user);
    });
  }, [id]);

  return (
    <Container>
      <div>
        <h2>{singUser.name}</h2>
        <p>username: {singUser.username}</p>
        <p>email: {singUser.email}</p>
        <p>phone: {singUser.phone}</p>
      </div>
      <div>
        <h2>Address</h2>
        <p>street: {singUser.address?.street}</p>
        <p>city: {singUser.address?.city}</p>
        <p>zipcode: {singUser.address?.zipcode}</p>
      </div>
      <div>
        <h2>Company</h2>
        <p>name: {singUser.company?.name}</p>
        <p>slogan: {singUser.company?.catchPhrase}</p>
      </div>
    </Container>
  );
};

export default SingleAuthor;
