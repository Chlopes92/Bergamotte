type ProductCategory = 'interior' | 'exterior' | 'bouquey';

export interface Consult {
    name: string;
    price: number;
    img: string;
    isAvailable: boolean;
    isVisible: boolean;
    category: ProductCategory;
}

export const CONSULTS: Consult[] = [
    {
        name: "Le bouquet du marché",
        price: 50,
        img: "assets/img/product/Img produit (1).png",
        isAvailable: true,
        isVisible: true,
        category: 'interior'
    },
]