import blogList from '../models/blog-post.object.json' with { type: 'json' }

export function getBlogPostByID(searchParam) {
  let searchID = parseInt(searchParam);
  return blogList.find(({ ID }) => ID === searchID);
}

export function getAllBlogPost() {
  return blogList;
}

export function postBlogPost(newPost) {
  blogList.append(newPost);
}

// export function deleteBlogPost(postToDelete) {
//   blogList.
// }
