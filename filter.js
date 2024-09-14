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

        if (category && products[category]) {
            products[category].forEach(product => {
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
            { name: "Paddy (Basmati)", img: "src/img/PaddyBasmati.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Paddy (Common)", img: "src/img/PaddyCommon.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Ragi", img: "src/img/Ragi.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Rice", img: "src/img/Rice.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Wheat", img: "src/img/Wheat.jpg", price: Math.floor(Math.random() * 500), discounts: [10] }
        ],
        dryFruits: [
            { name: "Almond", img: "src/img/Almond.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Cashewnuts", img: "src/img/Cashewnuts.jpg", price: Math.floor(Math.random() * 500), discounts: [20] }
        ],
        fibreCrops: [
            { name: "Cotton", img: "src/img/Cotton.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Jute", img: "src/img/Jute.jpg", price: Math.floor(Math.random() * 500), discounts: [30] }
        ],
        forestProducts: [
            { name: "Bay Leaf", img: "src/img/BayLeaf.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Neem Seed", img: "src/img/NeemSeed.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Tamarind Fruit", img: "src/img/TamarindFruit.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Tamarind Seed", img: "src/img/TamarindSeed.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Wood", img: "src/img/Wood.jpg", price: Math.floor(Math.random() * 500), discounts: [0] }
        ],
        fruits: [
            { name: "Amla", img: "src/img/Amla.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Apple", img: "src/img/Apple.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Banana", img: "src/img/Banana.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Chikoos", img: "src/img/Chikoos.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Custard Apple", img: "src/img/CustardApple.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Grapes", img: "src/img/Grapes.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Guava", img: "src/img/Guava.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Jack Fruit", img: "src/img/JackFruit.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Jamun", img: "src/img/Jamun.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Karbuja", img: "src/img/Karbuja.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Kinnow", img: "src/img/Kinnow.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Lime", img: "src/img/Lime.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Mango", img: "src/img/Mango.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Marasebu", img: "src/img/Marasebu.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Mousambi", img: "src/img/Mousambi.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Orange", img: "src/img/Orange.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Papaya", img: "src/img/Papaya.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Peach", img: "src/img/Peach.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Pineapple", img: "src/img/Pineapple.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Pomegranate", img: "src/img/Pomegranate.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Raspberry", img: "src/img/Raspberry.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Sapota", img: "src/img/Sapota.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Watermelon", img: "src/img/Watermelon.jpg", price: Math.floor(Math.random() * 500), discounts: [30] }
        ],
        pulses: [
            { name: "Arhar Dal", img: "src/img/ArharDal.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Chana Dal", img: "src/img/ChanaDal.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Green Gram", img: "src/img/GreenGram.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Horse Gram", img: "src/img/HorseGram.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Kidney Bean", img: "src/img/KidneyBean.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Masoor Dal", img: "src/img/MasoorDal.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Moong Dal", img: "src/img/MoongDal.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Toor Dal", img: "src/img/ToorDal.jpg", price: Math.floor(Math.random() * 500), discounts: [10] }
        ],
        spices: [
            { name: "Black Pepper", img: "src/img/BlackPepper.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Cardamom", img: "src/img/Cardamom.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
            { name: "Cinnamon", img: "src/img/Cinnamon.jpg", price: Math.floor(Math.random() * 500), discounts: [0] },
            { name: "Cloves", img: "src/img/Cloves.jpg", price: Math.floor(Math.random() * 500), discounts: [10] },
            { name: "Coriander Seeds", img: "src/img/CorianderSeeds.jpg", price: Math.floor(Math.random() * 500), discounts: [20] },
            { name: "Cumin Seeds", img: "src/img/CuminSeeds.jpg", price: Math.floor(Math.random() * 500), discounts: [30] },
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
