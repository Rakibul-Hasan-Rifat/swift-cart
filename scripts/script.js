const getCategories = async () => {
    const resposne = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await resposne.json();
    console.log(categories);
    showCategories(categories);
}

const getProducts = async (category = 'all') => {
    const url = category === 'all' ? 'https://fakestoreapi.com/products' : `https://fakestoreapi.com/products/category/${category}`;
    const resposne = await fetch(url);
    const products = await resposne.json();
    console.log(products.length);
    showProducts(products);
};

const showCategories = (categories) => {
    categories.unshift('all');
    console.log('Categories:', categories);
    const parentElement = document.getElementById('categories');

    categories.forEach(category => {
        const newElement = `
        <span id="${category}" class="category px-4 py-2 rounded-full cursor-pointer hover:bg-[#422ad552] hover:text-primary hover:font-semibold ${category === 'all' ? 'bg-[#422ad552] text-primary font-semibold' : 'bg-gray-100'}">${category[0].toUpperCase() + category.slice(1)}</span>
        `;

        parentElement.innerHTML += newElement
    })
}

const showProducts = (products) => {
    const parentElement = document.getElementById('products');

    parentElement.innerHTML = '';

    products.forEach(product => {
        const { title, price, image, rating, category } = product;
        const newElement = `
            <div class="card card-sm bg-base-100 w-full shadow-sm">
                    <figure class="bg-gray-200 flex items-center justify-center">
                        <img src="${image}" class="h-auto min-h-48 md:max-h-56 w-3/4 object-contain" alt="Bagpack" />
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between items-center">
                            <span class="text-primary text-sm bg-[#422ad552] px-2 py-1 rounded-full">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                            <span class="flex gap-1 justify-center items-center px-2 py-1 rounded-full">
                                <img src="./assets/icons/star.png" class="w-4 h-4 inline mr-1" alt="">
                                <span>${rating.rate} (${rating.count})</span>
                            </span>
                        </div>
                        <h4 class="text-lg font-semibold">
                            ${title}
                        </h4>
                        <h2 class="text-2xl font-bold">$${price}</h2>
                        <div class="card-actions justify-between items-center">
                            <button class="btn btn-sm flex gap-1 items-center">
                                <img src="./assets/icons/eye.png" alt="eye-icon" class="w-4 h-4">
                                <span>View Details</span>
                            </button>
                            <button class="btn btn-sm btn-primary">
                                <img src="./assets/icons/cart-white.png" alt="cart-icon" class="w-6 h-6">
                                <span>Add to Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
        `;
        parentElement.innerHTML += newElement;
    })
}

const toggleActiveLink = () => {
    console.log(window.location.pathname);
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        if (link.getAttribute('href') === `.${window.location.pathname}`) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    })
};
