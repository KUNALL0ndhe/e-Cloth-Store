import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Rating from "../components/Rating";

const ProductScreen = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchproduct = async () => {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        }
        fetchproduct();
    },[id]);
    return (
        <>
        <Flex mb='5'>
            <Button as={ RouterLink} to='/' colorScheme="gray" zIndex='1'>
                Go Back
            </Button>
        </Flex>

        <Grid templateColumns='5fr 4fr 3fr' gap='10'>
            {/* Column 1 */}
            <Image src={product.image} alt={product.name} borderRadius='md' />

            {/* Column 2 */}
            <Flex direction='column'>
                <Heading as='h5' fontSize='base' color='gray.500'>
                    {product.brand}
                </Heading>

                <Heading as='h2' fontSize='4xl' mb='4'>
                    {product.name}
                </Heading>

                <Rating 
                value={product.rating}
                color='yellow.500'
                text={`${product.numReviews} reviews`}
                />

                <Heading 
                as='h5'
                fontSize='4xl'
                fontWeight='bold'
                color='teal.600'
                my='5'
                mb='4'>
                ₹{product.price}
                </Heading>

                <Text>{product.description}
                </Text>
                </Flex>

                {/* Column 3 */}

                <Flex direction='column'>
                    <Flex justifyContent='space-between' py='2'>
                        <Text>Price:</Text>
                        <Text
                        fontWeight='bold'>
                            ₹{product.price}
                        </Text>
                    </Flex>

                    <Flex justifyContent='space-between' py='2'>
                        <Text>Status:</Text>
                        <Text fontWeight='bold'>
                            {product.countInStock > 0 ? 'In Stock' : 'Not Available'}
                        </Text>
                    </Flex>

                    <Button 
                    bg='gray.800'
                    colorScheme='teal'
                    my='2'
                    textTransform='uppercase'
                    letterSpacing='wide'
                    isDisabled={product.countInStock === 0}>
                        Add to Cart
                    </Button>
                </Flex>
        </Grid>
        </>
    )       
};

export default ProductScreen;