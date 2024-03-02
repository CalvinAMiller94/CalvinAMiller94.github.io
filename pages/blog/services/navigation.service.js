function navToBlogPost(ID) {
  console.log(ID);
  navigation.navigate('/pages/blog/post/post.html');
  localStorage.setItem('ID', ID);
}