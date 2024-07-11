// import axios from 'axios';
import { ProductProps } from '../components/Product';
import { getFavorites } from '../services/favoriteService';

// const API_URL = 'https://api.example.com/products';

const products: ProductProps[] = [
    {
        id: '1',
        imageSrc: 'https://image.msscdn.net/images/goods_img/20210312/1841764/1841764_17104689185394_500.jpg',
        brandName: 'YALE',
        productName: '(24SS) 2 TONE ARCH T-SHIRT WHITE',
        price: 24,
        isNew: true,
    },
    {
        id: '2',
        imageSrc: 'https://image.msscdn.net/images/goods_img/20240415/4055771/4055771_17164413957204_500.png',
        brandName: 'DIMITRI BLACK',
        productName: '(VLAD) Pigment Slash Short-Sleeved T-Shirt_Charcoal',
        price: 28,
        isNew: false,
    },
    {
        id: '3',
        imageSrc: 'https://image.msscdn.net/images/goods_img/20230310/3140760/3140760_17158257930573_500.jpg',
        brandName: 'URBANDTYPE',
        productName: 'Dayoff Graphic T-shirt_Red_DT395',
        price: 32,
        isNew: true,
    },
    {
        id: '4',
        imageSrc: 'https://www.lostmanagementcities.com/web/product/medium/202306/078c1d191452d7c21d96d94332a4fc49.jpg',
        brandName: 'LMC',
        productName: 'PUMA X LMC GRAPHIC TEE White',
        price: 58,
        isNew: false,
    },
    {
        id: '5',
        imageSrc: 'https://www.lostmanagementcities.com/web/product/medium/202304/23699457d71598a8e5e386b7044b75c5.jpg',
        brandName: 'LMC',
        productName: 'OVERDYED COLLEGE BEAR TEE Cream',
        price: 15,
        isNew: true,
    },
    {
        id: '6',
        imageSrc: 'https://www.lostmanagementcities.com/web/product/medium/202207/377a4b676b8372f4f49a90d9cac968f6.jpg',
        brandName: 'LMC',
        productName: 'LMC THORNS MULTI STRIPE TEE Black',
        price: 23,
        isNew: false,
    },
    {
        id: '7',
        imageSrc: 'https://cdn.shopify.com/s/files/1/0587/2605/6143/files/C-Logo-Tee-Green3_460x.jpg?v=1717490830',
        brandName: 'thisisneverthat',
        productName: 'C-Logo Tee',
        price: 70,
        isNew: true,
    },
    {
        id: '8',
        imageSrc: 'https://intl.thisisneverthat.com/cdn/shop/files/GD-Dancing-Bear-Mesh-S-S-Crew-Navy1_1080x.jpg?v=1716354023',
        brandName: 'thisisneverthat',
        productName: 'GD Dancing Bear Mesh S/S Crew Navy',
        price: 75,
        isNew: false,
    },
    {
        id: '9',
        imageSrc: 'https://intl.thisisneverthat.com/cdn/shop/files/Two-Hounds-Tee-Sky-Blue1_1080x.jpg?v=1712653181',
        brandName: 'thisisneverthat',
        productName: 'Two Hounds Tee Sky Blue',
        price: 67,
        isNew: true,
    },
    {
        id: '10',
        imageSrc: 'https://intl.thisisneverthat.com/cdn/shop/files/DSN-Logo-Tee-BLACK5_1080x.jpg?v=1717490983',
        brandName: 'thisisneverthat',
        productName: 'DSN-Logo Tee Black',
        price: 80,
        isNew: false,
    },
];




// export const fetchProducts = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };

export const fetchProducts = async (): Promise<ProductProps[]> => {
    const favorites = getFavorites();

    return products.map(product => ({
        ...product,
        favorite: favorites.includes(product.id)
    }));
};
