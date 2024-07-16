export interface Favorite {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        count: number;
        rate: number;
    };
}