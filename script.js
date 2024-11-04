// Function to filter items based on search input
function filterItems() {
  const searchInput = document.getElementById('searchBar').value.toLowerCase();
  const items = document.getElementsByClassName('item');

  Array.from(items).forEach(item => {
    const itemName = item.getAttribute('data-name').toLowerCase();
    if (itemName.includes(searchInput)) {
      item.style.display = ''; // Show item
    } else {
      item.style.display = 'none'; // Hide item
    }
  });
}

console.log("Campus Closet app loaded!");
