import { Grid,Heading } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import axios from 'axios';
import { useState, useEffect } from "react";

const HomeScreen = () => {
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data} = await axios.get(`/api/products`);
            setProducts(data);
        }
        fetchProducts();
    }, []);
    
    return (
        <>
        <Heading as='h2' mb='8' fontSize='xl'>
            Latest Product
        </Heading>

        <Grid templateColumns='1fr 1fr 1fr 1fr' gap='8'>
            {products.map((prod) => {
                return <ProductCard key={prod._id} product={prod} />;
            })}
        </Grid>
        </>
    );
};

export default HomeScreen;