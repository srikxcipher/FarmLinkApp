document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for price range slider
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');

    priceRange.addEventListener('input', () => {
        priceValue.textContent = priceRange.value;
    });

    // JavaScript for category selection
    const categorySelect = document.getElementById('category-select');
    const productsContainer = document.getElementById('products-container');

    const products = {
        beverages: [
            { name: "Tea", img: "src/img/Tea.jpg" },
            { name: "Coffee", img: "src/img/Coffee.jpg" }
        ],
        cereals: [
            { name: "Bajra", img: "src/img/Bajra.jpg" },
            { name: "Barley", img: "src/img/Barley.jpg" },
            { name: "Jowar", img: "src/img/Jowar.jpg" },
            { name: "Maize", img: "src/img/Maize.jpg" },
            { name: "Paddy (Basmati)", img: "src/img/PaddyBasmati.jpg" },
            { name: "Paddy (Common)", img: "src/img/PaddyCommon.jpg" },
            { name: "Ragi", img: "src/img/Ragi.jpg" },
            { name: "Rice", img: "src/img/Rice.jpg" },
            { name: "Wheat", img: "src/img/Wheat.jpg" }
        ],
        dryFruits: [
            { name: "Almond", img: "src/img/Almond.jpg" },
            { name: "Cashewnuts", img: "src/img/Cashewnuts.jpg" }
        ],
        fibreCrops: [
            { name: "Cotton", img: "src/img/Cotton.jpg" },
            { name: "Jute", img: "src/img/Jute.jpg" }
        ],
        forestProducts: [
            { name: "Bay Leaf", img: "src/img/BayLeaf.jpg" },
            { name: "Neem Seed", img: "src/img/NeemSeed.jpg" },
            { name: "Tamarind Fruit", img: "src/img/TamarindFruit.jpg" },
            { name: "Tamarind Seed", img: "src/img/TamarindSeed.jpg" },
            { name: "Wood", img: "src/img/Wood.jpg" }
        ],
        fruits: [
            { name: "Amla", img: "src/img/Amla.jpg" },
            { name: "Apple", img: "src/img/Apple.jpg" },
            { name: "Banana", img: "src/img/Banana.jpg" },
            { name: "Chikoos", img: "src/img/Chikoos.jpg" },
            { name: "Custard Apple", img: "src/img/CustardApple.jpg" },
            { name: "Grapes", img: "src/img/Grapes.jpg" },
            { name: "Guava", img: "src/img/Guava.jpg" },
            { name: "Jack Fruit", img: "src/img/JackFruit.jpg" },
            { name: "Jamun", img: "src/img/Jamun.jpg" },
            { name: "Karbuja", img: "src/img/Karbuja.jpg" },
            { name: "Kinnow", img: "src/img/Kinnow.jpg" },
            { name: "Lime", img: "src/img/Lime.jpg" },
            { name: "Mango", img: "src/img/Mango.jpg" },
            { name: "Marasebu", img: "src/img/Marasebu.jpg" },
            { name: "Mousambi", img: "src/img/Mousambi.jpg" },
            { name: "Orange", img: "src/img/Orange.jpg" },
            { name: "Papaya", img: "src/img/Papaya.jpg" },
            { name: "Peach", img: "src/img/Peach.jpg" },
            { name: "Pineapple", img: "src/img/Pineapple.jpg" },
            { name: "Pomegranate", img: "src/img/Pomegranate.jpg" },
            { name: "Raspberry", img: "src/img/Raspberry.jpg" },
            { name: "Strawberry", img: "src/img/Strawberry.jpg" }
        ],
        oilSeeds: [
            { name: "Groundnut", img: "src/img/Groundnut.jpg" },
            { name: "Sunflower", img: "src/img/Sunflower.jpg" }
        ],
        oilsFats: [
            { name: "Groundnut Oil", img: "src/img/GroundnutOil.jpg" },
            { name: "Mustard Oil", img: "src/img/MustardOil.jpg" }
        ],
        other: [
            { name: "Chilli", img: "src/img/Chilli.jpg" },
            { name: "Onion", img: "src/img/Onion.jpg" },
            { name: "Potato", img: "src/img/Potato.jpg" }
        ],
        pulses: [
            { name: "Chana Dal", img: "src/img/ChanaDal.jpg" },
            { name: "Green Gram", img: "src/img/GreenGram.jpg" },
            { name: "Kidney Bean", img: "src/img/KidneyBean.jpg" },
            { name: "Masoor Dal", img: "src/img/MasoorDal.jpg" },
            { name: "Moong Dal", img: "src/img/MoongDal.jpg" },
            { name: "Toor Dal", img: "src/img/ToorDal.jpg" }
        ],
        spices: [
            { name: "Black Pepper", img: "src/img/BlackPepper.jpg" },
            { name: "Cardamom", img: "src/img/Cardamom.jpg" },
            { name: "Cinnamon", img: "src/img/Cinnamon.jpg" },
            { name: "Cloves", img: "src/img/Cloves.jpg" },
            { name: "Coriander Seeds", img: "src/img/CorianderSeeds.jpg" },
            { name: "Cumin Seeds", img: "src/img/CuminSeeds.jpg" },
            { name: "Turmeric", img: "src/img/Turmeric.jpg" }
        ],
        vegetables: [
            { name: "Brinjal", img: "src/img/Brinjal.jpg" },
            { name: "Cabbage", img: "src/img/Cabbage.jpg" },
            { name: "Carrot", img: "src/img/Carrot.jpg" },
            { name: "Cauliflower", img: "src/img/Cauliflower.jpg" },
            { name: "Corn", img: "src/img/Corn.jpg" },
            { name: "Cucumber", img: "src/img/Cucumber.jpg" },
            { name: "Pumpkin", img: "src/img/Pumpkin.jpg" },
            { name: "Tomato", img: "src/img/Tomato.jpg" }
        ]
    };

    categorySelect.addEventListener('change', () => {
        const category = categorySelect.value;
        productsContainer.innerHTML = '';

        if (category && products[category]) {
            products[category].forEach(product => {
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'mb-4');
                card.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${product.img}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text text-muted">₹0</p>
                        </div>
                    </div>
                `;
                productsContainer.appendChild(card);
            });
        }
    });

    // Initial products load if needed
    categorySelect.dispatchEvent(new Event('change'));
});
