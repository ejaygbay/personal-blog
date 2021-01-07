const hambugerMenu = (e) => {
  let id = e.target.id;
  if (id === "line1") {
    id = e.target.parentElement.id;
  }
  document.getElementById(id).style = "display: none";

  document.getElementById("side-bar2").style = "display: block";

  document.getElementById("menu-items").style = "display: block";

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

  let menu_item_timeout = setTimeout(() => {
    document.getElementById("menu-items").style = "display: none";
    clearTimeout(menu_item_timeout);
  }, 80);
};

const selectMenu = (e) => {
  let id = `${e.target.id}-section`;
  console.log(id);
  showElement(id);
};

const showElement = (id) => {
  let eles = document.querySelectorAll(".section-item");

  eles.forEach((ele) => {
    if (ele.id !== id) {
      ele.classList.add("hide");
    }
  });

  document.getElementById(id).classList.remove("hide");
  document.getElementById(id).classList.add("show");

  hideSidebar();
};

const hideElement = (id) => {};
