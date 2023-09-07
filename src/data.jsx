import { AiOutlineContacts, AiOutlineInfoCircle, AiOutlineShoppingCart } from "react-icons/ai"
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
        id: 3,
        name: "Rakı",
        slug: "raki"
    },
    {
        id: 4,
        name: "Şaraplar",
        slug: "sarap"
    },
    {
        id: 5,
        name: "Vodka",
        slug: "vodka"
    },
    {
        id: 6,
        name: "Cin",
        slug: "cin"
    },
    {
        id: 7,
        name: "Likör",
        slug: "likör"
    },
    {
        id: 8,
        name: "Soğuk İçecekler",
        slug: "soguk-icecek"
    },
    {
        id: 9,
        name: "Çerezler",
        slug: "cerez"
    },
    {
        id: 10,
        name: "Atıştırmalık",
        slug: "atistirmalik"
    },
    {
        id: 11,
        name: "+18",
        slug: "yetiskin"
    },

]

export const products = [
    // beers
    {
        id: 100,
        name: "Tuborg Gold",
        category: "beer",
        image: "/products/tuborg-gold.jpg"
    },
    {
        id: 101,
        name: "Tuborg Gold (Kutu)",
        category: "beer",
        image: "/products/tuborg-gold-kutu.jpg"
    },
    {
        id: 102,
        name: "Tuborg Amber",
        category: "beer",
        image: "/products/tuborg-amber.jpg"
    },
    {
        id: 113,
        name: "Efes Özel Seri",
        category: "beer",
        image: "/products/efes-special.jpg"
    },
    {
        id: 103,
        name: "Efes Malt",
        category: "beer",
        image: "/products/efes-malt.jpg"
    },
    {
        id: 104,
        name: "Efes Malt (Kutu)",
        category: "beer",
        image: "/products/efes-malt-kutu.jpg"
    },
    {
        id: 105,
        name: "Efes Pilsener (Kutu)",
        category: "beer",
        image: "/products/efes-kutu.jpg"
    },
    {
        id: 106,
        name: "Carlsberg",
        category: "beer",
        image: "/products/carlsberg.jpg"
    },
    {
        id: 107,
        name: "Carlsberg Luna",
        category: "beer",
        image: "/products/carlsberg-luna.jpg"
    },
    {
        id: 108,
        name: "Carlsberg (Kutu)",
        category: "beer",
        image: "/products/carlsberg-kutu.jpg"
    },
    {
        id: 109,
        name: "Blanc 1964",
        category: "beer",
        image: "/products/blanc-1964.jpg"
    },
    {
        id: 110,
        name: "Blanc 1964 (Rose)",
        category: "beer",
        image: "/products/blanc-1964-rose.jpg"
    },
    {
        id: 111,
        name: "Corona",
        category: "beer",
        image: "/products/corona.jpg"
    },
    {
        id: 112,
        name: "Miller",
        category: "beer",
        image: "/products/miller.jpg"
    },
    // whiskey
    {
        id: 200,
        name: "Chivas Regal",
        category: "whiskey",
        image: "/products/chivas-regal.jpg"
    },
    {
        id: 201,
        name: "Chivas Regal 12",
        category: "whiskey",
        image: "/products/chivas-regal-12.jpg"
    },
    {
        id: 202,
        name: "Chivas Regal 25",
        category: "whiskey",
        image: "/products/chivas-regal-25.jpg"
    },
    {
        id: 203,
        name: "Chivas Regal 3lt.",
        category: "whiskey",
        image: "/products/chivas-regal-3lt.jpg"
    },
    {
        id: 204,
        name: "Jack Daniel's",
        category: "whiskey",
        image: "/products/jack-daniels.jpg"
    },
    {
        id: 205,
        name: "Jack Daniel's 12",
        category: "whiskey",
        image: "/products/jack-daniels-12.jpg"
    },
    {
        id: 206,
        name: "Jack Daniel's 3lt.",
        category: "whiskey",
        image: "/products/jack-daniels-3lt.jpg"
    },
    {
        id: 207,
        name: "Jack Daniel's Gentleman Jack",
        category: "whiskey",
        image: "/products/jack-daniels-gentleman-jack.jpg"
    },
    {
        id: 208,
        name: "Ballantines",
        category: "whiskey",
        image: "/products/ballantines.jpg"
    },
    {
        id: 209,
        name: "Ballantines 12",
        category: "whiskey",
        image: "/products/ballantines-12.jpg"
    },
    {
        id: 210,
        name: "Ballantines 3lt.",
        category: "whiskey",
        image: "/products/ballantines-3lt.jpg"
    },

    {
        id: 211,
        name: "Black Label 12",
        category: "whiskey",
        image: "/products/black-label.jpg"
    },
    {
        id: 212,
        name: "Black Label 3lt.",
        category: "whiskey",
        image: "/products/black-label-3lt.jpg"
    },
    {
        id: 213,
        name: "Red Label",
        category: "whiskey",
        image: "/products/red-label.jpg"
    },
    {
        id: 215,
        name: "Red Label 3lt.",
        category: "whiskey",
        image: "/products/red-label-3lt.jpg"
    },
    {
        id: 224,
        name: "Jim Beam",
        category: "whiskey",
        image: "/products/jim-beam.jpg"
    },
    {
        id: 216,
        name: "Johnnie Walker Green Label 15",
        category: "whiskey",
        image: "/products/johnnie-walker-green-label-15.jpg"
    },
    {
        id: 217,
        name: "Johnnie Walker 18",
        category: "whiskey",
        image: "/products/johnnie-walker-18.jpg"
    },
    {
        id: 218,
        name: "Johnnie Walker Gold Label",
        category: "whiskey",
        image: "/products/johnnie-walker-gold-label.jpg"
    },
    {
        id: 219,
        name: "Johnnie Walker Double Black",
        category: "whiskey",
        image: "/products/johnnie-walker-double-black.jpg"
    },
    {
        id: 220,
        name: "Cardhu Gold Reserve",
        category: "whiskey",
        image: "/products/cardhu-gold-reserve.jpg"
    },
    {
        id: 221,
        name: "Cardhu Single Malt",
        category: "whiskey",
        image: "/products/cardhu-single-malt.jpg"
    },
    {
        id: 222,
        name: "Burbeit Bourbon",
        category: "whiskey",
        image: "/products/bulleit-bourbon.jpg"
    },
    {
        id: 223,
        name: "The Singleton",
        category: "whiskey",
        image: "/products/singleton-12.jpg"
    },
    {
        id: 225,
        name: "J&B",
        category: "whiskey",
        image: "/products/j&b.jpg"
    },
    {
        id: 226,
        name: "Jameson Black Barrel",
        category: "whiskey",
        image: "/products/black-barrel.jpg"
    },
    {
        id: 227,
        name: "Scotch Blue",
        category: "whiskey",
        image: "/products/scotch-blue.jpg"
    },
    {
        id: 228,
        name: "Benriach",
        category: "whiskey",
        image: "/products/benriach.jpg"
    },
    {
        id: 229,
        name: "Jameson",
        category: "whiskey",
        image: "/products/jameson.jpg"
    },
    // rakı
    {
        id: 300,
        name: "Tekirdağ Altın Seri",
        category: "raki",
        image: "/products/tekirdağ-gold.jpg"
    },
    {
        id: 301,
        name: "Tekirdağ Rakısı",
        category: "raki",
        image: "/products/tekirdağ.jpg"
    },
    {
        id: 302,
        name: "Yeni Rakı Uzun Demleme",
        category: "raki",
        image: "/products/yeni-raki-uzun-demleme.jpg"
    },
    {
        id: 303,
        name: "Yeni Rakı Ustaların Karışımı",
        category: "raki",
        image: "/products/yeni-raki-ustalarin-karisimi.jpg"
    },
    {
        id: 304,
        name: "Yeni Rakı Ala",
        category: "raki",
        image: "/products/yeniraki-ala.jpg"
    },
    {
        id: 305,
        name: "Yeni Rakı",
        category: "raki",
        image: "/products/yeniraki.jpg"
    },
    {
        id: 306,
        name: "İzmir Rakısı",
        category: "raki",
        image: "/products/izmir-rakisi.jpg"
    },
    {
        id: 307,
        name: "İzmir Rakısı (Yaş Üzüm) ",
        category: "raki",
        image: "/products/izmir-rakisi-yas-uzum.jpg"
    },
    {
        id: 308,
        name: "İzmir Rakısı (Göbek) ",
        category: "raki",
        image: "/products/izmir-rakisi-göbek.jpg"
    },
    {
        id: 309,
        name: "Efe (klasik) ",
        category: "raki",
        image: "/products/efe-klasik.jpg"
    },
    {
        id: 310,
        name: "Efe Gold",
        category: "raki",
        image: "/products/efe-gold.jpg"
    },

    {
        id: 311,
        name: "Efe Yaş üzüm Rakısı ",
        category: "raki",
        image: "/products/efe-yas-uzum.jpg"
    },
    {
        id: 312,
        name: "Beylerbeyi",
        category: "raki",
        image: "/products/beylerbeyi.jpg"
    },
    {
        id: 313,
        name: "Tayfa",
        category: "raki",
        image: "/products/tayfa-raki.jpg"
    },
    {
        id: 314,
        name: "Civan",
        category: "raki",
        image: "/products/civan-raki.jpg"
    },
    {
        id: 315,
        name: "Sırdem",
        category: "raki",
        image: "/products/sırdem-raki.jpg"
    },
    {
        id: 316,
        name: "Vefa",
        category: "raki",
        image: "/products/vefa-raki.jpg"
    },
    // sarap
    {
        id: 400,
        name: "Köylüm Şirince Ahududu",
        category: "sarap",
        image: "/products/köylüm-sirince-ahududu.jpg"
    },
    {
        id: 401,
        name: "Köylüm Şirince Çilek",
        category: "sarap",
        image: "/products/köylüm-sirince-cilek.jpg"
    },
    {
        id: 402,
        name: "Köylüm Şirince Şeftali",
        category: "sarap",
        image: "/products/köylüm-sirince-seftali.jpg"
    },
    {
        id: 403,
        name: "Köylüm Şirince Nar",
        category: "sarap",
        image: "/products/köylüm-sirince-nar.jpg"
    },
    {
        id: 404,
        name: "Köylüm Şirince Vişne",
        category: "sarap",
        image: "/products/köylüm-sirince-visne.jpg"
    },
    {
        id: 405,
        name: "Köylüm Şirince Yaban Mersini",
        category: "sarap",
        image: "/products/köylüm-sirince-yabanmersini.jpg"
    },
    {
        id: 406,
        name: "Köylüm Şirince Böğürtlen",
        category: "sarap",
        image: "/products/köylüm-sirince-bogurtlen.jpg"
    },
    {
        id: 407,
        name: "İsabey (Boğazkere & Merlot)",
        category: "sarap",
        image: "/products/isabey-bogazkere-merlot.jpg"
    },
    {
        id: 408,
        name: "İsabey (Öküzgözü & Syrah)",
        category: "sarap",
        image: "/products/isabey-bogazkere-merlot.jpg"
    },
    {
        id: 409,
        name: "İsabey (Rose) ",
        category: "sarap",
        image: "/products/isabey-rose.jpg"
    },
    {
        id: 410,
        name: "Yalı (Blush) ",
        category: "sarap",
        image: "/products/yali-blush.jpg"
    },
    {
        id: 411,
        name: "Terra (Narince) ",
        category: "sarap",
        image: "/products/terra-narince.jpg"
    },
    {
        id: 412,
        name: "Terra (Bogazkere) ",
        category: "sarap",
        image: "/products/terra-bogazkere.jpg"
    },
    {
        id: 413,
        name: "Kavaklıdere Ancyra (Blush) ",
        category: "sarap",
        image: "/products/kavaklidere-ancyra-blush.jpg"
    },
    {
        id: 414,
        name: "Gielo (Blush) ",
        category: "sarap",
        image: "/products/gielo-blush.jpg"
    },
    {
        id: 415,
        name: "Gielo (White) ",
        category: "sarap",
        image: "/products/gielo-white.jpg"
    },
    {
        id: 416,
        name: "Kavaklıdere Angora ",
        category: "sarap",
        image: "/products/kavaklidere-angora.jpg"
    },
    {
        id: 417,
        name: "Kavaklıdere Angora (Blush) ",
        category: "sarap",
        image: "/products/kavaklidere-angora-blush.jpg"
    },
    {
        id: 418,
        name: "Kavaklıdere Angora (White) ",
        category: "sarap",
        image: "/products/kavaklidere-angora-white.jpg"
    },
    {
        id: 419,
        name: "Kavaklıdere Tigris ",
        category: "sarap",
        image: "/products/kavaklidere-tigris.jpg"
    },
    {
        id: 420,
        name: "Kavaklıdere Tigris (White)",
        category: "sarap",
        image: "/products/kavaklidere-tigris-white.jpg"
    },
    {
        id: 421,
        name: "Ganova ",
        category: "sarap",
        image: "/products/ganova.jpg"
    },
    {
        id: 422,
        name: "Buzbağ (Rose)",
        category: "sarap",
        image: "/products/buzbag-rose.jpg"
    },
    {
        id: 423,
        name: "Villa Dolluca",
        category: "sarap",
        image: "/products/villa-dolluca.jpg"
    },
    {
        id: 424,
        name: "Villa Dolluca (Klasik)",
        category: "sarap",
        image: "/products/villa-dolluca-klasik.jpg"
    },
    {
        id: 425,
        name: "Villa Dolluca (Rose)",
        category: "sarap",
        image: "/products/villa-dolluca-rose.jpg"
    },
    {
        id: 426,
        name: "Küp",
        category: "sarap",
        image: "/products/küp.jpg"
    },
    {
        id: 427,
        name: "Kavaklıdere Yakut",
        category: "sarap",
        image: "/products/kavaklidere-yakut.jpg"
    },
    {
        id: 428,
        name: "Kavaklıdere Anycra (Cabernet Syrah)",
        category: "sarap",
        image: "/products/kavaklidere-ancyra.jpg"
    },
    {
        id: 429,
        name: "Kavaklıdere Anycra (Merlot)",
        category: "sarap",
        image: "/products/kavaklidere-ancyra-merlot.jpg"
    },
    {
        id: 432,
        name: "Kavaklıdere Dikmen",
        category: "sarap",
        image: "/products/kavaklidere-dikmen.jpg"
    },
    {
        id: 430,
        name: "Shiluh Verdo (Süryani)",
        category: "sarap",
        image: "/products/shiluh-verdo.jpg"
    },
    {
        id: 431,
        name: "Shiluh Dara (Süryani)",
        category: "sarap",
        image: "/products/shiluh-dara.jpg"
    },
    {
        id: 433,
        name: "Shiluh Manastır (Süryani)",
        category: "sarap",
        image: "/products/shiluh-manastır.jpg"
    },
    {
        id: 434,
        name: "Chenet (Cabernet & Syrah)",
        category: "sarap",
        image: "/products/chenet-red.jpg"
    },
    {
        id: 435,
        name: "Chenet (Merlot)",
        category: "sarap",
        image: "/products/chenet-purple.jpg"
    },
    {
        id: 436,
        name: "Chenet (Rose)",
        category: "sarap",
        image: "/products/chenet-rose.jpg"
    },
    {
        id: 437,
        name: "Chenet",
        category: "sarap",
        image: "/products/chenet-green.jpg"
    },
    {
        id: 438,
        name: "Cape Spring",
        category: "sarap",
        image: "/products/cape-spring-yellow.jpg"
    },
    {
        id: 439,
        name: "Baron d'Arignac",
        category: "sarap",
        image: "/products/baron-darignac-red.jpg"
    },
    {
        id: 440,
        name: "Baron d'Arignac (Rose)",
        category: "sarap",
        image: "/products/baron-darignac-rose.jpg"
    },
    {
        id: 441,
        name: "770 Miles",
        category: "sarap",
        image: "/products/770-miles.jpg"
    },
    {
        id: 442,
        name: "Adelma ",
        category: "sarap",
        image: "/products/adelma.jpg"
    },
    {
        id: 443,
        name: "Adelma (Rose)",
        category: "sarap",
        image: "/products/adelma-rose.jpg"
    },
    {
        id: 444,
        name: "Pinot Noir",
        category: "sarap",
        image: "/products/pinot-noir.jpg"
    },
    {
        id: 445,
        name: "Nello",
        category: "sarap",
        image: "/products/nello.jpg"
    },
    {
        id: 446,
        name: "Dor",
        category: "sarap",
        image: "/products/dor.jpg"
    },
    {
        id: 447,
        name: "İsabey Yaban Mersini",
        category: "sarap",
        image: "/products/isabey-yabanmersini.jpg"
    },
    {
        id: 448,
        name: "İsabey Böğürtlen",
        category: "sarap",
        image: "/products/isabey-bogurtlen.jpg"
    },
    // vodka
    {
        id: 500,
        name: "Absolut",
        category: "vodka",
        image: "/products/absolut-vodka.jpg"
    },
    {
        id: 501,
        name: "Gilbey's",
        category: "vodka",
        image: "/products/gilbeys-vodka.jpg"
    },
    {
        id: 502,
        name: "Smirnoff",
        category: "vodka",
        image: "/products/smirnoff-vodka.jpg"
    },
    {
        id: 503,
        name: "Smirnoff (Green Apple)",
        category: "vodka",
        image: "/products/smirnoff-vodka-green-apple.jpg"
    },
    {
        id: 504,
        name: "İstan Blue",
        category: "vodka",
        image: "/products/istanblue-vodka.jpg"
    },
    // cin
    {
        id: 600,
        name: "Beefeater",
        category: "cin",
        image: "/products/beefeater.jpg"
    },
    {
        id: 601,
        name: "Cork",
        category: "cin",
        image: "/products/cork.jpg"
    },
    {
        id: 602,
        name: "Malfy",
        category: "cin",
        image: "/products/malfy.jpg"
    },
    {
        id: 603,
        name: "Gordon",
        category: "cin",
        image: "/products/gordon.jpg"
    },
    // likör
    {
        id: 700,
        name: "Jagermeister",
        category: "likör",
        image: "/products/jagermeister.jpg"
    },
    {
        id: 701,
        name: "Jagermeister Manifest",
        category: "likör",
        image: "/products/jagermeister-manifest.jpg"
    },
    {
        id: 702,
        name: "Jagermeister Cold Brew",
        category: "likör",
        image: "/products/jagermeister-cold-brew.jpg"
    },
    // soguk icecek
    {
        id: 800,
        name: "Coco Cola",
        category: "soguk-icecek",
        image: "/products/coco-cola.jpg"
    },
    {
        id: 801,
        name: "Red Bull",
        category: "soguk-icecek",
        image: "/products/redbull.jpg"
    },
    {
        id: 802,
        name: "Fanta",
        category: "soguk-icecek",
        image: "/products/fanta.jpg"
    },
    {
        id: 803,
        name: "Sprite",
        category: "soguk-icecek",
        image: "/products/sprite.jpg"
    },
    {
        id: 804,
        name: "Fuse Tea",
        category: "soguk-icecek",
        image: "/products/fuse-tea.jpg"
    },
    {
        id: 805,
        name: "Tropicana Vişne",
        category: "soguk-icecek",
        image: "/products/tropicana-visne.jpg"
    },
    {
        id: 806,
        name: "Dimes Vişne",
        category: "soguk-icecek",
        image: "/products/dimes-visne.jpg"
    },
    {
        id: 807,
        name: "Dimes Şeftali",
        category: "soguk-icecek",
        image: "/products/dimes-seftali.jpg"
    },
    {
        id: 808,
        name: "Dimes Ananas",
        category: "soguk-icecek",
        image: "/products/dimes-ananas.jpg"
    },
    {
        id: 809,
        name: "Dimes Portakal",
        category: "soguk-icecek",
        image: "/products/dimes-portakal.jpg"
    },
    {
        id: 810,
        name: "Dimes Karışık",
        category: "soguk-icecek",
        image: "/products/dimes-karisik.jpg"
    },
    {
        id: 811,
        name: "Uludağ Sade Soda",
        category: "soguk-icecek",
        image: "/products/uludag-sade.jpg"
    },
    {
        id: 812,
        name: "Uludağ Frutti",
        category: "soguk-icecek",
        image: "/products/uludag-frutti.jpg"
    },
    {
        id: 813,
        name: "Nescafe XPress",
        category: "soguk-icecek",
        image: "/products/nescafe-xpress.jpg"
    },
    {
        id: 814,
        name: "Uludağ Limonata",
        category: "soguk-icecek",
        image: "/products/uludag-limonata.jpg"
    },
    {
        id: 815,
        name: "Fruko",
        category: "soguk-icecek",
        image: "/products/fruko-gazoz.jpg"
    },
    {
        id: 816,
        name: "Hot Line",
        category: "soguk-icecek",
        image: "/products/hot-line.jpg"
    },
    {
        id: 817,
        name: "Doğanay Şalgam",
        category: "soguk-icecek",
        image: "/products/doganay-salgam.jpg"
    },
    {
        id: 818,
        name: "Schwappes Lemon",
        category: "soguk-icecek",
        image: "/products/schweppes-lemon.jpg"
    },
    {
        id: 819,
        name: "Schwappes",
        category: "soguk-icecek",
        image: "/products/schweppes-mandaren.jpg"
    },
    // cerez
    {
        id: 900,
        name: "Tuzlu Fıstık",
        category: "cerez",
        image: "/products/tuzlu-fistik.jpg"
    },
    {
        id: 901,
        name: "Fındık",
        category: "cerez",
        image: "/products/findik.jpg"
    },
    {
        id: 902,
        name: "Çekirdek",
        category: "cerez",
        image: "/products/cekirdek.jpg"
    },
    {
        id: 903,
        name: "karisik-cerez",
        category: "cerez",
        image: "/products/karisik-cerez.jpg"
    },
    {
        id: 904,
        name: "Karışık Çerez",
        category: "cerez",
        image: "/products/tuzlu-badem.jpg"
    },
    // atistirmalik
    {
        id: 1000,
        name: "Lays Yoğurt ve Mevsim Yeşillikli",
        category: "atistirmalik",
        image: "/products/lays-yogurt.jpg"
    },
    {
        id: 1001,
        name: "Lays Klasik",
        category: "atistirmalik",
        image: "/products/lays-klasik.jpg"
    },
    {
        id: 1002,
        name: "Lays baharat",
        category: "atistirmalik",
        image: "/products/lays-baharat.jpg"
    },
    {
        id: 1003,
        name: "Lays Fırından",
        category: "atistirmalik",
        image: "/products/lays-firindan.jpg"
    },
    {
        id: 1004,
        name: "Doritos Peynirli",
        category: "atistirmalik",
        image: "/products/doritos-peynirli.jpg"
    },
    {
        id: 1005,
        name: "Doritos Baharat",
        category: "atistirmalik",
        image: "/products/doritos-baharat.jpg"
    },
    {
        id: 1006,
        name: "Flamin'Hot",
        category: "atistirmalik",
        image: "/products/doritos-flamin-hot.jpg"
    },
    {
        id: 1007,
        name: "Ruffles Originals",
        category: "atistirmalik",
        image: "/products/ruffles-originals.jpg"
    },
    {
        id: 1008,
        name: "Ruffles Ketçap Aromalı",
        category: "atistirmalik",
        image: "/products/ruffles-ketcap.jpg"
    },

    // yetiskin
    {
        id: 1101,
        name: "Okey (Rötar)",
        category: "yetiskin",
        image: "/products/okey-rötar.jpg"
    },
    {
        id: 1102,
        name: "Okey (Sımsıkı)",
        category: "yetiskin",
        image: "/products/okey-simsiki.jpg"
    },
    {
        id: 1103,
        name: "Okey (Sıcak Temas)",
        category: "yetiskin",
        image: "/products/okey-sicak-temas.jpg"
    },
    {
        id: 1104,
        name: "Okey (Klasik)",
        category: "yetiskin",
        image: "/products/okey-klasik.jpg"
    },
    {
        id: 1105,
        name: "Okey (Hisset)",
        category: "yetiskin",
        image: "/products/okey-hisset.jpg"
    },
    {
        id: 1106,
        name: "Okey (Ultra Hisset)",
        category: "yetiskin",
        image: "/products/okey-ultra-hisset.jpg"
    },
    {
        id: 1107,
        name: "Hilti Gold",
        category: "yetiskin",
        image: "/products/hilti-gold.jpg"
    },
    {
        id: 1108,
        name: "Max 48",
        category: "yetiskin",
        image: "/products/max-48.jpg"
    },
    {
        id: 1109,
        name: "48 Hours Gold",
        category: "yetiskin",
        image: "/products/48-hours-gold.jpg"
    },
    {
        id: 1110,
        name: "Viga 50000",
        category: "yetiskin",
        image: "/products/viga-50000.jpg"
    },
    {
        id: 1111,
        name: "Stag 9 0 0 0",
        category: "yetiskin",
        image: "/products/stag-9000.jpg"
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