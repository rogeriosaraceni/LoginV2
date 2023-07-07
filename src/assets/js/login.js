/*! --------------------------------------------------------------------
 * mostra senha
 * --------------------------------------------------------------------*/
let btnShowAllPassword = document.querySelectorAll('[data-js="currentTogglePass"]');

btnShowAllPassword.forEach((item) => {
    item.addEventListener("click", () => {
        item.children[0].classList.toggle("bi-unlock");
        const inputPass = item.parentNode.children[0];
        const type = inputPass.getAttribute("type") === "password" ? "text" : "password";
        inputPass.setAttribute("type", type);
    });
});
