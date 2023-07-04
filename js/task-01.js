const allCategoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategoriesItems.length}`);

allCategoriesItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
