import React, {  } from 'react';
import {
    SimpleGrid
} from '@chakra-ui/react';
import { Product, ProductProps } from '../../components/Product';

interface ProductListProps {
    products: ProductProps[];
    onAddToCartClick?: (product: ProductProps) => void;
    onFavoriteClick?: (product: ProductProps) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCartClick, onFavoriteClick }) => {

    return (
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4}>
            {products.map((product, index) => (
                <Product
                    key={index}
                    {...product}
                    favorite={product.favorite}
                    onFavoriteClick={onFavoriteClick ? () => onFavoriteClick(product) : undefined}
                    onAddToCartClick={onAddToCartClick ? () => onAddToCartClick(product) : undefined}
                />
            ))}
        </SimpleGrid>
    );
};

export default ProductList;
