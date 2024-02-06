import { IBlogPostObject } from "../../models";

export class Blog {

  

  constructor(private blogPostObject: IBlogPostObject, private window: Window) {
    window.onload = (event) => {

    }
  }


  private MapBlogPosts(blogPostObject: IBlogPostObject): void /** change to IBlogPostObject */ {
    return;
  }
}