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
