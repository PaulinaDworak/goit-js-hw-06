const counterValue = document.querySelector("#value");
let count = 0;

document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.action === "increment") {
            count++;
        } else {
            count--;
        }
        counterValue.textContent = count;
    });
});
