//chat//
const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatoes",
    "Herbs",
    "Condiments",
];

const list = document.querySelector("#ingredients");

if (list) {
    // Create a document fragment to optimize performance
    const fragment = document.createDocumentFragment();

    ingredients.forEach(function (element) {
        const listElement = document.createElement("li");
        listElement.textContent = element;
        listElement.classList.add("item"); // Add the "item" class
        fragment.appendChild(listElement);
    });

    // Append the whole fragment to the list in a single operation
    list.appendChild(fragment);
} else {
    console.error("The ul#ingredients element was not found.");
}
