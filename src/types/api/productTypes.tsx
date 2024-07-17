import { ApiResponse } from './apiTypes';

export interface ProductApiResponse {
    id: string;
    brandName: string;
    productName: string;
    price: number;
    isNew: boolean;
    imageUrl: string;
    sex?: string;
    hashTags?: string[];
    category?: string;
    onSale?: boolean;
    onSalePrice?: number;
    availableColors: string[];
    availableSizes: string[];
}

export type ProductListApiResponse = ApiResponse<ProductApiResponse>
