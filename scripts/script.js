const getCategories = async () => {
    const resposne = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await resposne.json();
    console.log(categories);
    showCategories(categories);
}

const showCategories = (categories) => {
    categories.unshift('all');
    console.log('Categories:', categories);
    const parentElement = document.getElementById('categories');

    categories.forEach(category => {
        const newElement = `
        <span id="${category}" class="px-4 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">${category[0].toUpperCase() + category.slice(1)}</span>
        `;
        parentElement.innerHTML += newElement
    })
}

getCategories();