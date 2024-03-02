import data from '../models/blog-post.object.json' assert { type: 'json' }

let definedBlogPost = { ID: 0, Title: "", Headline: "", Content: "" };

export function getBlogPostByID(ID) {
  let blogList = data;
  blogList.forEach(blogPost => {
    definedBlogPost = blogPost;
    if (definedBlogPost.ID = ID) {
      return definedBlogPost;
    }
  });
}