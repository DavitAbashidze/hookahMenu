const menu = [
    {
        id: 1,
        title: "ceramic head",
        category:"fruit head",
        price:24.45,
        img:"./images/hookah1.jpg",
        desc:`hookah on ceramic head, thats make you crazy`,
    },
    {
        id: 2,
        title: "grapefruit head",
        category:"fruit head",
        price:32.45,
        img:"./images/hookah6.webp",
        desc:`hookah on grapefruit head, thats make you enjoying`,
    },
    {
        id: 3,
        title: "pineapple head",
        category:"fruit head",
        price:42.45,
        img:"./images/hookah4.webp",
        desc:`hookah on pineapple head, thats make you crazy`,
    },
    {
        id: 4,
        title: "wookah",
        category:"hookah",
        price:350,
        img:"./images/wookah.webp",
        desc:`great hookah with the best quality`,
    },
    {
        id: 5,
        title: "mr.wood",
        category:"hookah",
        price:280,
        img:"./images/mr.wood.jpg",
        desc:`great hookah with the best quality`,
    },
    {
        id: 6,
        title: "amira",
        category:"hookah",
        price:150,
        img:"./images/amira.webp",
        desc:`great hookah with the best quality`,
    },
    {
        id: 7,
        title: "BYO",
        category:"hookah",
        price:140,
        img:"./images/BYO.jpg",
        desc:`great hookah with the best quality`,
    },
    {
        id: 8,
        title: "medusa",
        category:"hookah",
        price:180,
        img:"./images/medusa.jpg",
        desc:`great hookah with the best quality`,
    },
    {
        id: 9,
        title: "ceramic head",
        category:"fruit head",
        price:24.45,
        img:"./images/hookah2.avif",
        desc:`hookah on ceramic head, thats make you crazy`,
    },
    {
        id: 10,
        title: "ceramic head",
        category:"fruit head",
        price:24.45,
        img:"./images/hookah3.webp",
        desc:`hookah on ceramic head, thats make you crazy`,
    },
    {
        id: 11,
        title: "ceramic head",
        category:"fruit head",
        price:24.45,
        img:"./images/hookah4.webp",
        desc:`hookah on ceramic head, thats make you crazy`,
    },
    {
        id: 12,
        title: "darkside tobacco",
        category:"flavor brands",
        price:17.50,
        img:"./images/darkside.jpg",
        desc:`fucking tobacco`,
    },
    {
        id: 13,
        title: "serbetli tobacco",
        category:"flavor brands",
        price:13.50,
        img:"./images/serbetli.jpg",
        desc:`fucking tobacco`,
    },
    {
        id: 14,
        title: "fumari tobacco",
        category:"flavor brands",
        price:16.50,
        img:"./images/fumari.jpg",
        desc:`fucking tobacco`,
    },
    {
        id: 15,
        title: "al fakhir tobacco",
        category:"flavor brands",
        price:9.50,
        img:"./images/al fakhir.webp",
        desc:`fucking tobacco`,
    },
    
];

const categories = Array.from(
    new Set([
        "all",
        ...menu.map((item) => {
            return item.category;
        }),
    ])
);

const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

btnContainer.innerHTML = categories
.map((item) => {
    return `<button type="button" class="filter-btn" data-id="${item}">${item}</button>`;
})
.join("");
const displayHookas = (category) => {
    if (category === "all"){
        sectionCenter.innerHTML = menu
        .map((item) => {
            return ` <article class="menu-item">
            <img class="photo" src="${item.img}" alt="hookah">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                ${item.desc}
                </p>
            </div>
        </article>`;
        })
        .join("");
    }
    else{
        sectionCenter.innerHTML = menu.filter((item) => {
            return item.category === category;
        })
        .map((item) => {
            return ` <article class="menu-item">
            <img class="photo" src="${item.img}" alt="hookah">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                ${item.desc}
                </p>
            </div>
        </article>`;
        })
        .join("");
    }
};


displayHookas("all");

const categoryBtn = Array.from(document.querySelectorAll(".filter-btn"));

categoryBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
        displayHookas(event.target.dataset.id);
    });
});
