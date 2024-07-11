import React, { useEffect, useState } from 'react';
import { Box, Text, SimpleGrid, useDisclosure, Spinner } from '@chakra-ui/react';
import { Product, ProductProps } from '../components/Product';
import { fetchProducts } from '../services/productService';
import { getFavorites, addToFavorites, removeFromFavorites } from '../services/favoriteService';
import CartModal from './Home/CartModal';

const Favorites: React.FC = () => {
    const [favoriteProducts, setFavoriteProducts] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [selectedProduct, setSelectedProduct] = useState<ProductProps>({} as ProductProps);

    const handleAddToCartClick = (product: ProductProps) => {
        setSelectedProduct(product);
        onOpen();
    };

    const handleFavoriteClick = (product: ProductProps) => {
        const updatedProducts = favoriteProducts.map(p => {
            if (p.id === product.id) {
                const updatedProduct = {
                    ...p,
                    favorite: !p.favorite,
                };
                if (updatedProduct.favorite) {
                    addToFavorites(updatedProduct.id);
                } else {
                    removeFromFavorites(updatedProduct.id);
                }
                return updatedProduct;
            }
            return p;
        });
        setFavoriteProducts(updatedProducts);
    };

    useEffect(() => {
        const loadFavoriteProducts = async () => {
            const allProducts = await fetchProducts();
            const favoriteIds = getFavorites();
            const filteredProducts = allProducts.filter(product => favoriteIds.includes(product.id));
            setFavoriteProducts(filteredProducts);
            setLoading(false);
        };

        loadFavoriteProducts();
    }, []);

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
                {favoriteProducts.map((product, index) => (
                    <Product
                        key={index}
                        {...product}
                        onFavoriteClick={() => handleFavoriteClick(product)}
                        onAddToCartClick={() => handleAddToCartClick(product)}
                    />
                ))}
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
