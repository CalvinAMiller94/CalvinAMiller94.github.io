import data from './models/blog-post.object.json' assert { type: 'json' }

window.onload = (event) => {
  MapBlogPosts(data);
}

function MapBlogPosts(blogPostObject) {
  let definedBlogPost = {ID: 0, Title: "", Headline: "", Content: ""};
  console.log("map blog posts");
  blogPostObject.forEach(blogPost => {
    definedBlogPost = blogPost;
    console.log(definedBlogPost.ID);
  });
}
