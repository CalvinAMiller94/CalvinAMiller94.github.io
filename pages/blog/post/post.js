import { getBlogPostByID } from '../services/blog.api.js';

var definedBlogPost = { ID: 0, Title: "", Headline: "", Content: "" };

window.onload = (event) => {
  let ID = localStorage.getItem('ID');
  var blogPost = getBlogPostByID(ID);
  generateBlogPostPage(blogPost);
}

function generateBlogPostPage(blogPost) {
  definedBlogPost = blogPost;
  let postTitle = document.getElementById('post-title');
  let postHeadline = document.getElementById('post-headline');
  let postContent = document.getElementById('post-content');
  postTitle.innerHTML = `${definedBlogPost.Title}`;
  postHeadline.innerHTML = `${definedBlogPost.Headline}`;
  postContent.innerHTML = `${definedBlogPost.Content}`;
}


// add these to blog json
// 09-21-2037
// 06-18-2081
// 07-13-2070
// 03-13-2063
// 05-27-2059
// 09-22-2038
// 01-17-2028
// 07-23-2093
// 02-21-2079
// 04-01-2081
// 02-05-2095
// 05-16-2072