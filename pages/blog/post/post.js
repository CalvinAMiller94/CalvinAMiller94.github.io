import { getBlogPostByID } from '../services/blog.api.js';

window.onload = (event) => {
  console.log(event);
  console.log(window.location);
  // let id = 
  getBlogPostByID(3);
}