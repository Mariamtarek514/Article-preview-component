let clickedIcon = document.querySelector(".icon"),
    poupu = document.querySelector(".popup_links");
clickedIcon.addEventListener("click", () => {
    poupu.classList.toggle("show-popup");
    clickedIcon.classList.toggle("clicked");
});
