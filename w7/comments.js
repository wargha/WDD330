let startComments = [
  {
    name: "Bechler Falls",
    date: "2020-06-03T22:58:38.324Z",
    content: "A nice hike",
    type: "hike",
  },
  {
    name: "Teton Canyon",
    date: "2020-06-03T22:58:38.324Z",
    content: "An okay hike",
    type: "hike",
  },
  {
    name: "Teton Canyon",
    date: "2020-06-03T22:58:38.324Z",
    content: "A bad hike",
    type: "hike",
  },
  {
    name: "Denanda Falls",
    date: "2020-06-03T22:58:38.324Z",
    content: "A horrible hike",
    type: "waterfall",
  },
];

export default class Comments {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    this.commentList = startComments;
    this.addToLocalStorage();
    this.readFromLocalStorage();
  }

  getComments() {
    return this.commentList;
  }

  showCommentsList() {
    const hikeComments = this.commentList.filter((el) => el.type === "hike");
    hikeComments.map((comment) => {
      this.parentElement.insertAdjacentHTML(
        "beforeend",
        `  <div class="container col single-note">
		<div class="container wrap-name-date">
		  <span class="name">${comment.name}</span>
		  <span class="date">${comment.date}</span>
		</div>
		<span class="comment"
		  >${comment.content}</span
		>
	  </div>`
      );
    });
  }

  addToLocalStorage() {
    sessionStorage.setItem("comments", JSON.stringify(this.commentList));
  }

  readFromLocalStorage() {
    let items = JSON.parse(
      sessionStorage.getItem("comments", this.commentList)
    );
    console.log(items);
  }
}
