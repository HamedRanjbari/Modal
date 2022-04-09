let $ = document
let btn = $.getElementById("btn")
let modalParent = $.querySelector(".modal-parent")
let mainSection = $.querySelector(".mainSection")
let closeIcon = $.querySelector(".closeIcon")



btn.addEventListener("click", function () {
    modalParent.style.display = "flex"
    mainSection.style.filter = "blur(8px)"
})
closeIcon.addEventListener("click", function () {
        modalParent.style.display = "none"
    mainSection.style.filter = "blur(0px)"
})