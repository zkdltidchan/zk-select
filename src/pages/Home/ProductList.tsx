import React, {  } from 'react';
import {
    SimpleGrid
} from '@chakra-ui/react';
import { Product } from '../../components/Product';
import { ProductListProps, ProductProps } from '../../types/components/productTypes';
import { useFavorites } from '../../context/FavoriteContext';


const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart, onFavorite }) => {
    const { isFavorite } = useFavorites();
    return (
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
            {products.map((item: ProductProps, index: number) => (
                <Product
                    key={index}
                    {...item}
                    favorite={isFavorite(item.product.id)}
                    onFavorite={onFavorite}
                    onAddToCart={onAddToCart}
                />
            ))}
        </SimpleGrid>
    );
};

export default ProductList;
