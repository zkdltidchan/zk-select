import { ApiResponse } from './apiTypes';

export interface ProductApiResponse {
    id: string;
    brandName: string;
    productName: string;
    price: number;
    isNew: boolean;
    imageSrc: string;
}

export type ProductListApiResponse = ApiResponse<ProductApiResponse>
