import React, { useEffect, useState } from "react";
import { fetchAuthors } from "../../services/fetch";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors().then((data) => {
      setAuthors(data);
    });
  }, []);

  return (
    <Container>
      <h3>AUTHORS</h3>
      {authors.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default Authors;
