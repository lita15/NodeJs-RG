function mapUsers(users) {
  return {
    data: users,
    count: users.length,
  };
}

function mapArticles(articles) {
  let articel = {
    data: articles,
    count: articles.length,
  };
  return articel;
}

let articles2 = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 6,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
];

// console.log(mapUsers(articles2));
export { mapArticles };
export default mapUsers;

// TODO: answer here
