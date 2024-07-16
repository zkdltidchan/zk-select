import React, {
    useState,
} from 'react';
import { Box, Text, SimpleGrid, useDisclosure, Spinner } from '@chakra-ui/react';
import { Product, ProductProps } from '../components/Product';
import { useFavorites } from '../context/FavoriteContext';
import { useProducts } from '../context/ProductContext';
import CartModal from './Home/CartModal';

const Favorites: React.FC = () => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [selectedProduct, setSelectedProduct] = useState<ProductProps>({} as ProductProps);
    const { products, loading } = useProducts();

    const handleAddToCartClick = (product: ProductProps) => {
        setSelectedProduct(product);
        onOpen();
    };

    const handleFavoriteClick = (product: ProductProps) => {
        if (isFavorite(product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product.id);
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
                {products.map((product: ProductProps, index: number) => {
                    if (isFavorite(product.id)) {
                        return (
                            <Product
                                key={index}
                                {...product}
                                favorite={isFavorite(product.id)}
                                onFavoriteClick={() => handleFavoriteClick(product)}
                                onAddToCartClick={() => handleAddToCartClick(product)}
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
                    product={selectedProduct}
                />
            )}
        </Box>
    );
};

export default Favorites;
