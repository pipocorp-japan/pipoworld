function viewstory() {
  const viewer = document.getElementById("viewer");
  const viewnum = document.getElementById("viewnum");
  viewer.src = "/story/" + viewnum.value + ".html";
}

document.getElementById("viewnum").addEventListener("change", viewstory);

document.addEventListener("DCMContentLoaded", viewstory)