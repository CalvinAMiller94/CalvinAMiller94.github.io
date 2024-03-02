function navToBlogPost(ID) {
  console.log(ID);
  navigation.navigate('/pages/blog/post/post.html/', {
    state: { id: ID }
  });
}