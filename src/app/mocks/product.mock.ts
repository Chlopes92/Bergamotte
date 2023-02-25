type ProductCategory = 'interior' | 'exterior' | 'bouquey';

export interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    isAvailable: boolean;
    isVisible: boolean;
    category: ProductCategory;
}

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Piléa Léa",
        price: 50,
        img: "assets/img/product/Img produit.png",
        isAvailable: true,
        isVisible: true,
        category: 'interior'
    },
    {
        id: 2,
        name: "Le bouquet du marché",
        price: 50,
        img: "assets/img/product/Img produit (1).png",
        isAvailable: true,
        isVisible: true,
        category: 'bouquey'
    },
    {
        id: 3,
        name: "Strelitzia Stanislas",
        price: 50,
        img: "assets/img/product/Img produit (2).png",
        isAvailable: true,
        isVisible: true,
        category: 'exterior'
    },
    {
        id: 4,
        name: "Piléa Léa",
        price: 50,
        img: "assets/img/product/Img produit.png",
        isAvailable: true,
        isVisible: true,
        category: 'interior'
    },
    {
        id: 5,
        name: "Le bouquet du marché",
        price: 50,
        img: "assets/img/product/Img produit (1).png",
        isAvailable: true,
        isVisible: true,
        category: 'bouquey'
    },
    {
        id: 6,
        name: "Strelitzia Stanislas",
        price: 50,
        img: "assets/img/product/Img produit (2).png",
        isAvailable: true,
        isVisible: true,
        category: 'exterior'
    },
    {
        id: 7,
        name: "Piléa Léa",
        price: 50,
        img: "assets/img/product/Img produit.png",
        isAvailable: true,
        isVisible: true,
        category: 'interior'
    },
    {
        id: 8,
        name: "Le bouquet du marché",
        price: 50,
        img: "assets/img/product/Img produit (1).png",
        isAvailable: true,
        isVisible: true,
        category: 'bouquey'
    },
    {
        id: 9,
        name: "Strelitzia Stanislas",
        price: 50,
        img: "assets/img/product/Img produit (2).png",
        isAvailable: true,
        isVisible: true,
        category: 'exterior'
    },
]