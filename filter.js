document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for price range slider
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');

    // Set initial value of the slider to its maximum value (500)
    priceRange.max = 500;
    priceRange.value = 500;
    priceValue.textContent = priceRange.value;

    // Function to filter products based on the price range and discounts
    function filterProducts() {
        const category = categorySelect.value;
        const maxPrice = parseInt(priceRange.value, 10);
        const has10Discount = discount10.checked;
        const has20Discount = discount20.checked;
        const has30Discount = discount30.checked;

        productsContainer.innerHTML = '';

        // Create an array to store all products (if "All Categories" is selected)
        let filteredProducts = [];

        if (category === 'all') {
            // Combine all products from every category into one array
            Object.values(products).forEach(categoryProducts => {
                filteredProducts = filteredProducts.concat(categoryProducts);
            });
        } else if (category && products[category]) {
            // If a specific category is selected, use its products
            filteredProducts = products[category];
        }

        // Filter products based on price range and discounts
        filteredProducts.forEach(product => {
            const isInPriceRange = product.price <= maxPrice;
            const hasSelectedDiscount = 
                (has10Discount && product.discounts.includes(10)) ||
                (has20Discount && product.discounts.includes(20)) ||
                (has30Discount && product.discounts.includes(30)) ||
                (!has10Discount && !has20Discount && !has30Discount);

            if (isInPriceRange && hasSelectedDiscount) {
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'mb-4');
                card.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${product.img}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text text-muted">₹${product.price}</p>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(card);
            }
        });
    }

    // Update the price display and filter products on slider input
    priceRange.addEventListener('input', () => {
        priceValue.textContent = priceRange.value;
        filterProducts();
    });

    // JavaScript for category selection
    const categorySelect = document.getElementById('category-select');
    const productsContainer = document.getElementById('products-container');
    
    // Track selected discounts
    const discount10 = document.getElementById('discount10');
    const discount20 = document.getElementById('discount20');
    const discount30 = document.getElementById('discount30');

    const products = {
        beverages: [
            { name: "Tea", img: "src/img/Tea.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Coffee", img: "src/img/Coffee.jpg", price: Math.floor(Math.random() * 500), discounts: [20] }
        ],
        cereals: [
            { name: "Bajra", img: "src/img/Bajra.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Barley", img: "src/img/Barley.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Jowar", img: "src/img/Jowar.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Maize", img: "src/img/Maize.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Paddy (Basmati)", img: "src/img/Paddy Basmati.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Paddy (Common)", img: "src/img/Paddy.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Ragi", img: "src/img/Ragi.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Rice", img: "src/img/Rice.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Wheat", img: "src/img/Wheat.jpg", price: Math.floor(Math.random() * 500), discounts: [10] }
        ],
        dryFruits: [
            { name: "Almond", img: "src/img/Almonds.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Cashewnuts", img: "src/img/Cashewnuts.jpg", price: Math.floor(Math.random() * 500), discounts: [20] }
        ],
        fibreCrops: [
            { name: "Cotton", img: "src/img/Cotton.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Jute", img: "src/img/Jute.jpg", price: Math.floor(Math.random() * 500), discounts: [30] }
        ],
        forestProducts: [
            { name: "Bay Leaf", img: "src/img/Bay Leaf.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Neem Seed", img: "src/img/Neem Seed.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Tamarind Fruit", img: "src/img/Tamarind Fruit.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Tamarind Seed", img: "src/img/Tamarind Seeds.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Wood", img: "src/img/Wood.jpg", price: Math.floor(Math.random() * 500), discounts: [0] }
        ],
        fruits: [
            { name: "Amla", img: "src/img/Amla.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Apple", img: "src/img/Apples.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Banana", img: "src/img/Banana.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Chikoos", img: "src/img/Chikoos.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Custard Apple", img: "src/img/Custard Apple.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Grapes", img: "src/img/Grapes.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Guava", img: "src/img/Guava.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Jack Fruit", img: "src/img/JackFruit.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Jamun", img: "src/img/Jamun.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Kharbhuja", img: "src/img/Kharbhuja.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Lime", img: "src/img/Lemon.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Mango", img: "src/img/Mangoes.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Orange", img: "src/img/Oranges.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Papaya", img: "src/img/Papaya.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Peach", img: "src/img/Peach.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Pineapple", img: "src/img/Pineapples.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Pomegranate", img: "src/img/Pomegranate.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Raspberry", img: "src/img/Raspberry.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Sapota", img: "src/img/Sapota.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Watermelon", img: "src/img/Watermelon.jpg", price: Math.floor(Math.random() * 500), discounts: [30] }
        ],
        pulses: [
            { name: "Arhar Dal", img: "src/img/Arhar Dal.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Chana Dal", img: "src/img/Chana Dal.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Green Gram", img: "src/img/Green Gram.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Horse Gram", img: "src/img/Horse Gram.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Kidney Bean", img: "src/img/Kidney Beans.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Masoor Dal", img: "src/img/Masoor Dal.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Moong Dal", img: "src/img/Moong Dal.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Toor Dal", img: "src/img/Toor Dal.jpg", price: Math.floor(Math.random() * 500), discounts: [10] }
        ],
        spices: [
            { name: "Black Pepper", img: "src/img/Black Pepper.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Cardamom", img: "src/img/Cardamom.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Cinnamon", img: "src/img/Cinnamon.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Cloves", img: "src/img/Cloves.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Coriander Seeds", img: "src/img/Coriander Seeds.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Cumin Seeds", img: "src/img/Cumin Seeds.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Turmeric", img: "src/img/Turmeric.jpg", price: Math.floor(Math.random() * 500), discounts: [0] }
        ],
        vegetables: [
            { name: "Brinjal", img: "src/img/Brinjal.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Cabbage", img: "src/img/Cabbage.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Carrot", img: "src/img/Carrot.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Cauliflower", img: "src/img/Cauliflower.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Corn", img: "src/img/Corn.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Cucumber", img: "src/img/Cucumber.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Pumpkin", img: "src/img/Pumpkin.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Tomato", img: "src/img/Tomato.jpg", price: Math.floor(Math.random() * 500), discounts: [0] }
        ]
    };

    // Initialize filter on page load
    filterProducts();

    categorySelect.addEventListener('change', filterProducts);
    discount10.addEventListener('change', filterProducts);
    discount20.addEventListener('change', filterProducts);
    discount30.addEventListener('change', filterProducts);
});
