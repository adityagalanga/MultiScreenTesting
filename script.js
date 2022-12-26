// JavaScript
const addButton = document.getElementById("add-button");
const linkInput = document.getElementById("link-input");
const searchButton = document.getElementById("search-button");
const iframeContainer = document.getElementById("iframe-container");

addButton.addEventListener("click", function() {
    const link = linkInput.value;

    const container = document.createElement("div");
    container.classList.add("iframe-container");
    iframeContainer.appendChild(container);

  
    const iframe = document.createElement("iframe");
    iframe.src = "link";
    iframe.style.width = "640px";
    iframe.style.height = "360px";
    container.appendChild(iframe);
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    container.appendChild(buttonContainer);
  
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    buttonContainer.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
      container.remove();
    });
    
    const refreshButton = document.createElement("button");
  refreshButton.innerHTML = "Refresh";
  refreshButton.classList.add("refresh-button");
  buttonContainer.appendChild(refreshButton);
  refreshButton.addEventListener("click", function() {
    const iframe = container.querySelector("iframe");
    iframe.src = iframe.src;
  });

  const iframes = document.querySelectorAll("iframe");
    if (iframes.length === 1) {
    iframes[0].style.width = "854px";
    iframes[0].style.height = "480px";
    } else {
    iframes.forEach(function(iframe) {
        iframe.style.width = "640px";
        iframe.style.height = "360px";
    });
    }
});

searchButton.addEventListener("click", function() {
  const link = linkInput.value;
  const iframes = iframeContainer.querySelectorAll("iframe");
  iframes.forEach(function(iframe) {
    iframe.src = link;
  });
});