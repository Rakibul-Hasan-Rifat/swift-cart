document.getElementById('categories').addEventListener('click', (event) => {
    getProducts(event.target.id);
    document.querySelectorAll('.category').forEach(elem => {
        elem.classList.replace('bg-[#422ad552]', 'bg-gray-100');
        elem.classList.remove('text-primary', 'font-semibold');
        
        if (elem === event.target) {
            elem.classList.replace('bg-gray-100', 'bg-[#422ad552]');
            elem.classList.add('text-primary', 'font-semibold');
        }
    })
})