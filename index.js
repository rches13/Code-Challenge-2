const shoppingList = ['Food', 'Detergents', 'Water', 'Groceries', 'Toiletries']; // Initialize array with items
const list = document.getElementById("shoppingList");

function updateList() {
    list.innerHTML = ""; // Clear existing list items

    shoppingList.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        listItem.addEventListener("click", function() {
            listItem.classList.toggle("purchased");
        });
        list.appendChild(listItem);
    });
}

// Add item on button click
document.getElementById("addButton").addEventListener("click", function() {
    const newItem = document.getElementById("newItem").value.trim();
    if (newItem) {
        shoppingList.push(newItem);
        updateList();
        document.getElementById("newItem").value = ""; 
    }
});

// Clear list on button click
document.getElementById("clearButton").addEventListener("click", function() {
    shoppingList.length = 0;
    updateList();
});

updateList(); 
