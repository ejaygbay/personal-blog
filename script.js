const hambugerMenu = (e) => {
  let id = e.target.id;
  if (id === "line1") {
    id = e.target.parentElement.id;
  }
  document.getElementById(id).style = "display: none";

  document.getElementById("side-bar2").style = "display: block";

  document.getElementById("side-bar").style =
    "width: 70%;transition-timing-function: ease;";
};

const hideSidebar = (e) => {
  document.getElementById("side-bar").style = "width: 0%";

  document.getElementById("side-bar2").style = "display: none";

  let hambuger = setTimeout(() => {
    document.getElementById("hambuger-menu").style = "display: block";
    clearTimeout(hambuger);
  }, 200);
};
