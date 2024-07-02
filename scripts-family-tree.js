document.addEventListener("DOMContentLoaded", () => {
    // Добавим функционал для меню
    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseover", () => {
        menu.classList.add("expanded");
    });
    menu.addEventListener("mouseout", () => {
        menu.classList.remove("expanded");
    });

    // Добавим функционал для перехода по дереву
    const treeLink = document.querySelector(".tree-link");
    if (treeLink) {
        treeLink.addEventListener("click", () => {
            window.location.href = "family-tree.html";
        });
    }
});
