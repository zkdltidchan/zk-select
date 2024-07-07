import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { Product, ProductProps } from '../../components/Product';

const products: ProductProps[] = [
    {
        imageSrc: 'https://picsum.photos/seed/1/250',
        brandName: 'Brand 1',
        productName: 'Product 1',
        price: 10,
        isNew: true,
    },
    {
        imageSrc: 'https://picsum.photos/seed/2/250',
        brandName: 'Brand 2',
        productName: 'Product 2',
        price: 20,
        isNew: false,
    },
    {
        imageSrc: 'https://picsum.photos/seed/3/250',
        brandName: 'Brand 3',
        productName: 'Product 3',
        price: 30,
        isNew: true,
    },
    {
        imageSrc: 'https://picsum.photos/seed/4/250',
        brandName: 'Brand 4',
        productName: 'Product 4',
        price: 40,
        isNew: false,
    },
    {
        imageSrc: 'https://picsum.photos/seed/5/250',
        brandName: 'Brand 5',
        productName: 'Product 5',
        price: 50,
        isNew: true,
    },
    {
        imageSrc: 'https://picsum.photos/seed/6/250',
        brandName: 'Brand 6',
        productName: 'Product 6',
        price: 60,
        isNew: false,
    },
    {
        imageSrc: 'https://picsum.photos/seed/7/250',
        brandName: 'Brand 7',
        productName: 'Product 7',
        price: 70,
        isNew: true,
    },
    {
        imageSrc: 'https://picsum.photos/seed/8/250',
        brandName: 'Brand 8',
        productName: 'Product 8',
        price: 80,
        isNew: false,
    },
    {
        imageSrc: 'https://picsum.photos/seed/9/250',
        brandName: 'Brand 9',
        productName: 'Product 9',
        price: 90,
        isNew: true,
    },
    {
        imageSrc: 'https://picsum.photos/seed/10/250',
        brandName: 'Brand 10',
        productName: 'Product 10',
        price: 100,
        isNew: false,
    },
];

const ProductList: React.FC = () => {
    return (
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
            {products.map((product, index) => (
                <Product
                    key={index}
                    imageSrc={product.imageSrc}
                    brandName={product.brandName}
                    productName={product.productName}
                    price={product.price}
                    isNew={product.isNew}
                />
            ))}
        </SimpleGrid>
    );
};

export default ProductList;
