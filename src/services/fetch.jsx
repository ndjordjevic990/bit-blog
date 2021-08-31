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

const getMorePosts = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => response.json())
    .then((userPosts) => {
      return userPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
    });
};

export {
  fetchPosts,
  fetchAuthors,
  fetchSinglePosts,
  fetchAuthorsPosts,
  fetchAuthorsInfo,
  getMorePosts,
};
