function openService(service) {
  const box = document.getElementById("serviceBox");
  const title = document.getElementById("serviceTitle");

  title.innerText = "Book " + service;
  box.style.display = "block";

  console.log(service + " clicked");
}
