import React, { useEffect, useState } from "react";
import { fetchAuthors } from "../../services/fetch";

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
      {console.log(authors)}
      <h3>AUTHORS</h3>
      {authors.map((user, i) => (
        <div>
          <h3>{user.name}</h3>
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default Authors;
