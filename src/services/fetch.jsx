const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};

const fetchSinglePosts = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (response) => response.json()
  );
};

const fetchAuthors = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
};

const fetchAuthorsInfo = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => response.json()
  );
};

const fetchAuthorsPosts = (userId) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => response.json());
};

export {
  fetchPosts,
  fetchAuthors,
  fetchSinglePosts,
  fetchAuthorsPosts,
  fetchAuthorsInfo,
};
