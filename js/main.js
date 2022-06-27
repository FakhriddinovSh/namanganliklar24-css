var elModal = document.querySelector(".modal");
var modalOpenButton = document.querySelector(".js-modal-open-button");
var modalCloseButton = document.querySelector(".modal-off")

modalOpenButton.addEventListener("click", function(){
    elModal.classList.add("modal-active")
});



modalCloseButton.addEventListener("click", function(){
    elModal.classList.remove("modal-active")
});