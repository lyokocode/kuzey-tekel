import { AiOutlineContacts, AiOutlineHome, AiOutlineInfoCircle, AiOutlineShoppingCart } from "react-icons/ai"
import { MdHomeRepairService } from "react-icons/md"

export const navigationBar = [
    // {
    //     id: 1,
    //     name: "Anasayfa",
    //     link: "/",
    //     icon: <AiOutlineHome size={25} color="#4f46e5" />
    // },
    {
        id: 2,
        name: "Ürünler",
        link: "/products",
        icon: <AiOutlineShoppingCart size={25} color="#4f46e5" />

    },
    {
        id: 3,
        name: "Hakkımızda",
        link: "/about",
        icon: <AiOutlineInfoCircle size={25} color="#4f46e5" />
    },
    {
        id: 4,
        name: "Hizmetler",
        link: "/services",
        icon: <MdHomeRepairService size={25} color="#4f46e5" />
    },
    {
        id: 5,
        name: "İletişim",
        link: "/contact",
        icon: <AiOutlineContacts size={25} color="#4f46e5" />
    },
]

export const categories = [
    {
        id: 1,
        name: "Bira",
        slug: "beer"
    },
    {
        id: 2,
        name: "Wiski",
        slug: "whiskey"
    },
    {
        id: 9,
        name: "Vodka",
        slug: "vodka"
    },
    {
        id: 7,
        name: "Cin",
        slug: "cin"
    },
    {
        id: 8,
        name: "Likör",
        slug: "likör"
    },
    {
        id: 6,
        name: "Şaraplar",
        slug: "sarap"
    },
    {
        id: 3,
        name: "Soğuk İçecekler",
        slug: "soguk-icecek"
    },
    {
        id: 4,
        name: "Çerezler",
        slug: "cerez"
    },
    {
        id: 5,
        name: "Atıştırmalık",
        slug: "atistirmalik"
    },

]

export const products = [
    {
        id: 1,
        name: "Tuborg Gold",
        category: "beer",
        image: "/products/tuborg-gold.jpg"
    },
    {
        id: 2,
        name: "Tuborg Amber",
        category: "beer",
        image: "/products/tuborg-amber.jpg"
    },
    {
        id: 3,
        name: "Tuborg Gold (Kutu)",
        category: "beer",
        image: "/products/tuborg-gold-kutu.jpg"
    },
    {
        id: 4,
        name: "Chivas Regal",
        category: "whiskey",
        image: "/products/chivas-regal.jpg"
    },
    {
        id: 48,
        name: "ballantines",
        category: "whiskey",
        image: "/products/ballantines.jpg"
    },
    {
        id: 49,
        name: "Jack Daniel's",
        category: "whiskey",
        image: "/products/jack-daniels.jpg"
    },
    {
        id: 491,
        name: "Benriach",
        category: "whiskey",
        image: "/products/benriach.jpg"
    },
    {
        id: 45,
        name: "Jameson",
        category: "whiskey",
        image: "/products/jameson.jpg"
    },
    {
        id: 80,
        name: "Black Label",
        category: "whiskey",
        image: "/products/black-label.jpg"
    },
    {
        id: 81,
        name: "Red Label",
        category: "whiskey",
        image: "/products/red-label.jpg"
    },
    {
        id: 46,
        name: "Jameson Black Barrel",
        category: "whiskey",
        image: "/products/black-barrel.jpg"
    },
    {
        id: 40,
        name: "Scotch Blue",
        category: "whiskey",
        image: "/products/scotch-blue.jpg"
    },
    {
        id: 70,
        name: "Jagermeister",
        category: "likör",
        image: "/products/jagermeister.jpg"
    },
    {
        id: 72,
        name: "Jagermeister Manifest",
        category: "likör",
        image: "/products/jagermeister-manifest.jpg"
    },
    {
        id: 71,
        name: "Jagermeister Cold Brew",
        category: "likör",
        image: "/products/jagermeister-cold-brew.jpg"
    },
    {
        id: 90,
        name: "Absolut",
        category: "vodka",
        image: "/products/absolut-vodka.jpg"
    },
    {
        id: 91,
        name: "Gilbey's",
        category: "vodka",
        image: "/products/gilbeys-vodka.jpg"
    },
    {
        id: 92,
        name: "İstan Blue",
        category: "vodka",
        image: "/products/istanblue-vodka.jpg"
    },
    {
        id: 41,
        name: "Beefeater",
        category: "cin",
        image: "/products/beefeater.jpg"
    },
    {
        id: 42,
        name: "Cork",
        category: "cin",
        image: "/products/cork.jpg"
    },
    {
        id: 47,
        name: "Malfy",
        category: "cin",
        image: "/products/malfy.jpg"
    },
    {
        id: 482,
        name: "Gordon",
        category: "cin",
        image: "/products/gordon.jpg"
    },
    {
        id: 50,
        name: "Chenet",
        category: "sarap",
        image: "/products/chenet-red.jpg"
    },
    {
        id: 51,
        name: "Chenet",
        category: "sarap",
        image: "/products/chenet-purple.jpg"
    },
    {
        id: 52,
        name: "Chenet (Rose)",
        category: "sarap",
        image: "/products/chenet-rose.jpg"
    },
    {
        id: 53,
        name: "Chenet",
        category: "sarap",
        image: "/products/chenet-green.jpg"
    },
    {
        id: 54,
        name: "Cape Spring",
        category: "sarap",
        image: "/products/cape-spring-yellow.jpg"
    },
    {
        id: 57,
        name: "Baron d'Arignac",
        category: "sarap",
        image: "/products/baron-darignac-red.jpg"
    },
    {
        id: 55,
        name: "Baron d'Arignac (Rose)",
        category: "sarap",
        image: "/products/baron-darignac-rose.jpg"
    },
    {
        id: 56,
        name: "770 Miles",
        category: "sarap",
        image: "/products/770-miles.jpg"
    },
    {
        id: 59,
        name: "Adelma ",
        category: "sarap",
        image: "/products/adelma.jpg"
    },
    {
        id: 58,
        name: "Adelma (Rose)",
        category: "sarap",
        image: "/products/adelma-rose.jpg"
    },
    {
        id: 60,
        name: "Pinot Noir",
        category: "sarap",
        image: "/products/pinot-noir.jpg"
    },
    {
        id: 61,
        name: "Nello",
        category: "sarap",
        image: "/products/nello.jpg"
    },
    {
        id: 66,
        name: "Küp",
        category: "sarap",
        image: "/products/küp.jpg"
    },
    {
        id: 62,
        name: "Villa Dolluca",
        category: "sarap",
        image: "/products/villa-dolluca.jpg"
    },
    {
        id: 63,
        name: "Villa Dolluca (Klasik)",
        category: "sarap",
        image: "/products/villa-dolluca-klasik.jpg"
    },
    {
        id: 64,
        name: "Villa Dolluca (Rose)",
        category: "sarap",
        image: "/products/villa-dolluca-rose.jpg"
    },
    {
        id: 65,
        name: "Dor",
        category: "sarap",
        image: "/products/dor.jpg"
    },
    {
        id: 5,
        name: "Coco Cola",
        category: "soguk-icecek",
        image: "/products/coco-cola.jpg"
    },
    {
        id: 6,
        name: "Lays Yoğurt ve Mevsim Yeşillikli",
        category: "atistirmalik",
        image: "/products/lays-yogurt.jpg"
    },
    {
        id: 7,
        name: "Tuzlu Fıstık",
        category: "cerez",
        image: "/products/tuzlu-fistik.jpg"
    },
    {
        id: 8,
        name: "Red Bull",
        category: "soguk-icecek",
        image: "/products/redbull.jpg"
    },

]

export const sliders = [
    {
        id: 1,
        image: "/slider/kuzey-tekel.png",
        alt: "Kuzey tekel sipariş"
    },
    {
        id: 2,
        image: "/slider/kuzey-tekel-1.png",
        alt: "Kuzey tekel sipariş"
    },
    {
        id: 3,
        image: "/slider/kuzey-tekel-2.png",
        alt: "Kuzey tekel sipariş"
    },
    {
        id: 4,
        image: "/slider/kuzey-tekel-3.png",
        alt: "Kuzey tekel sipariş"
    },
]


export const regions = [
    {
        id: 1,
        name: 'Bölge 1',
        deliveryTime: 'tahmini teslimat: 20 - 25 dakika',
        neighborhoods: [
            'Bornova Merkez',
            'Ergene Mahallesi',
            'Erzene Mahallesi',
            'Kızılay Mahallesi',
            'Kazımdirik mahallesi',
            'Atatürk Mahallesi',
            'Özkanlar',
            'Manavkuyu',
            'Mansuroğlu mahallesi',

        ]
    },
    {
        id: 2,
        name: 'Bölge 2 ',
        deliveryTime: 'tahmini teslimat: 25 - 30 dakika',
        neighborhoods: [
            'Evka 3',
            'Evka 4',
            'İnönü mahallesi',
            'Mevlânâ mahallesi',
            'Doğanlar mahallesi',
        ]
    },
    {
        id: 3,
        name: 'Bölge 3 ',
        deliveryTime: 'tahmini teslimat: 30 - 35 dakika',
        neighborhoods: [
            'Yeşilova mahallesi',
            'Karacaoğlan mahallesi',
            'Rafet paşa mahallesi',
            'Barbaros mahallesi',
        ]
    }
];