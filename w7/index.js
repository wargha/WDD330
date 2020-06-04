import Hikes from "./hikes.js";
import Comments from "./comments.js";

const myComments = new Comments("comments");

//on load grab the array and insert it into the page
const myHikes = new Hikes("hikes");
window.addEventListener("load", () => {
  myHikes.showHikeList();
  myComments.showCommentsList();
});

function addComment() {
  let content = document.getElementById("add-comment").value;
  console.log(content);
}

document.getElementById("listen").addEventListener("click", addComment());
