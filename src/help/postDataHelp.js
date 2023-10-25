import { getNFirstElementsOfArray, sortBy } from "./arrayHelp";

export const getFeturedPosts = (posts, numberOfFeaturedPost) => {
  const featuredPosts = posts.filter((post) => post.featured);
  return getNFirstElementsOfArray(featuredPosts, numberOfFeaturedPost);
};

export const getPopularPosts = (posts, numberOfPopularPosts) => {
  const sortedByRating = [...getTopRatedPost(posts, numberOfPopularPosts)];
  getPostsWithMostComments(sortedByRating, numberOfPopularPosts);
  return sortedByRating;
};

export const getTopRatedPost = (posts, numberOfFeaturedPost) => {
  const sorted = sortBy(posts, "rating");
  return getNFirstElementsOfArray(sorted, numberOfFeaturedPost);
};

export const getPostsWithMostComments = (posts, numberOfPosts) => {
  const sorted = sortBy(posts, "numberOfComments");
  return getNFirstElementsOfArray(sorted, numberOfPosts);
};
