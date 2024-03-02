import data from './models/blog-post.object.json' assert { type: 'json' }

window.onload = (event) => {
  MapBlogPosts(data);
}

function MapBlogPosts(blogPostObject) {
  let definedBlogPost = { ID: 0, Title: "", Headline: "", Content: "" };
  let blogListContainer = document.getElementById('blog-list-container');
  console.log("map blog posts");
  blogPostObject.forEach(blogPost => {
    definedBlogPost = blogPost;
    let blogCard = document.createElement('div');
    blogCard.classList.add('col-lg-4', 'col-md-6', 'mb-5');
    blogCard.setAttribute('onClick', `navToBlogPost(${definedBlogPost.ID})`);
    blogCard.innerHTML = `
      <div class="card border-0 rounded-5">
        <div class="card-header border-0 rounded-top-5 p-5">
          <h4>${definedBlogPost.Title}</h4>
        </div>
        <div class="card-body px-5">
          <small>${definedBlogPost.Headline}</small>
        </div>
      </div>
    `;
    blogListContainer.append(blogCard);
  });
}

// for every 3 blogPost's, we need a row with 3 columns with a card in each column. 