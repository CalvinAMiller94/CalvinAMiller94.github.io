import data from './models/blog-post.object.json' assert { type: 'json' }

window.onload = (event) => {
  MapBlogPosts(data);
}

function MapBlogPosts(blogPostObject) {
  let definedBlogPost = {ID: 0, Title: "", Headline: "", Content: ""};
  console.log("map blog posts");
  blogPostObject.forEach(blogPost => {
    definedBlogPost = blogPost;
    // console.log(definedBlogPost);
    console.log(definedBlogPost.ID % 3 == 0);
  });
}

// for every 3 blogPost's, we need a row with 3 columns with a card in each column. 
