function getAmountOfCategories(elementsArr) {
    console.log("Number of categories:", elementsArr.length);
}

function getCategoriesInfo(elementsArr) {
    elementsArr.forEach(element => {
        console.log("Category:", element.firstElementChild.textContent);
        console.log("Elements:", element.lastElementChild.children.length);
    });
}

function getListInfo(elementsArr) {
    getAmountOfCategories(elementsArr);
    getCategoriesInfo(elementsArr);
}

const categoriesEl = document.querySelectorAll(".item");

getListInfo(categoriesEl);