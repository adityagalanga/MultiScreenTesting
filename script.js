// JavaScript
const addButton = document.getElementById("add-button");
const linkInput = document.getElementById("link-input");
const searchButton = document.getElementById("search-button");
const iframeContainer = document.getElementById("iframe-container");

addButton.addEventListener("click", function() {
  const iframe = document.createElement("iframe");
  iframeContainer.appendChild(iframe);
});

searchButton.addEventListener("click", function() {
  const link = linkInput.value;
  const iframes = iframeContainer.querySelectorAll("iframe");
  iframes.forEach(function(iframe) {
    iframe.src = link;
  });
});