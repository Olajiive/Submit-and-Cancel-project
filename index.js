const submit = document.querySelector(".btn1");
const cancel = document.querySelector(".btn2");
const page1 = document.querySelector(".cont1")
const page2 = document.querySelector(".cont2")


submit.addEventListener("click", () => {
    page1.classList.add("show")
    page2.classList.add("show")
})
cancel.addEventListener("click", () => {
    page1.classList.remove("show")
    page2.classList.remove("show")
})

