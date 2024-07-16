import React, {
    useState,
} from 'react';
import { Box, Text, SimpleGrid, useDisclosure, Spinner } from '@chakra-ui/react';
import { Product } from '../components/Product';
import { ProductProps } from '../types/components/productTypes';
import { useFavorites } from '../context/FavoriteContext';
import { useProducts } from '../context/ProductContext';
import CartModal from './Home/CartModal';

const Favorites: React.FC = () => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [selectedProduct, setSelectedProduct] = useState<ProductProps| null>(null);
    const { products, loading } = useProducts();

    const handleAddToCartClick = (productProps: ProductProps) => {
        setSelectedProduct(productProps);
        onOpen();
    };

    const handleFavoriteClick = (productProps: ProductProps) => {
        if (isFavorite(productProps.product.id)) {
            removeFromFavorites(productProps.product.id);
        } else {
            addToFavorites(productProps.product.id);
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Spinner size="xl" />
            </Box>
        );
    }

    return (
        <Box textAlign="center" py={10} px={6}>
            <Text fontSize="24px" mt={3} mb={2}>
                Favorites
            </Text>
            <SimpleGrid columns={{ base: 2, md: 5 }} spacing={6}>
                {products.map((productProps: ProductProps, index: number) => {
                    if (isFavorite(productProps.product.id)) {
                        return (
                            <Product
                                key={index}
                                {...productProps}
                                favorite={isFavorite(productProps.product.id)}
                                onFavorite={handleFavoriteClick}
                                onAddToCart={handleAddToCartClick}
                            />
                        );
                    }
                    return null;
                }
                )}
            </SimpleGrid>
            {selectedProduct && (
                <CartModal
                    isOpen={isOpen}
                    onClose={onClose}
                    item={selectedProduct}
                />
            )}
        </Box>
    );
};

export default Favorites;
