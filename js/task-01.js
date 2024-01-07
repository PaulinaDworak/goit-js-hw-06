// Count and display the number of categories
const categoriesCount = document.querySelectorAll("#categories .item").length;
console.log(`Number of categories: ${categoriesCount}`);

// Iterate through each category and display header text and number of elements
document.querySelectorAll("#categories .item").forEach((category, index) => {
    const headerText = category.querySelector("h2").textContent;
    const categoryItemCount = category.querySelectorAll("ul li").length;
    console.log(
        `Category ${
            index + 1
        }: ${headerText} - Number of items: ${categoryItemCount}`
    );
});
