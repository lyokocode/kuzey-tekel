import { AiOutlineContacts, AiOutlineHome, AiOutlineInfoCircle, AiOutlineShoppingCart } from "react-icons/ai"
import { MdHomeRepairService } from "react-icons/md"

export const navigationBar = [
    {
        id: 1,
        name: "Anasayfa",
        link: "/",
        icon: <AiOutlineHome size={25} color="#4f46e5" />
    },
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
        image: "/slider/create.gif",
        alt: "Kuzey tekel sipariş"
    },
    {
        id: 2,
        image: "/slider/delivery.gif",
        alt: "Kuzey tekel sipariş"
    },
    {
        id: 3,
        image: "/slider/location.gif",
        alt: "Kuzey tekel sipariş"
    },
    {
        id: 4,
        image: "/slider/location2.gif",
        alt: "Kuzey tekel sipariş"
    },
]