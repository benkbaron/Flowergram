export const asArray = (posts) => (
  Object.keys(posts).map(key => posts[key])
);
