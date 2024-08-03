import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import {HiOutlineMenuAlt3, HiShoppingBag, HiUser } from 'react-icons/hi'
import HeaderMenuItem from "./HeaderMenuItem";
import { Link as RouterLink } from 'react-router-dom'

const Header = () => {

    const [show, setShow] = useState(false);

    return (
        <Flex
        as='header'
        align='center'
        justifyContent='space-between'
        wrap='wrap'
        w='100%'
        py='6'
        px='6'
        bgColor='gray.800'
        pos='fixed'
        top='0'
        left='0'
        >
            {/* LOGO */}

            <Link as={RouterLink} to='/'>
                <Heading
                as='h1'
                color='whiteAlpha.800'
                size='md'
                letterSpacing='wide'
                fontWeight='bold'
                textTransform='uppercase'
                >
                    RST Store
                </Heading>
            </Link>

            {/* Hamburger Menu  Items option*/}
            <Box
            display={{ base: 'block', md: 'none' }}
            onClick={() => setShow(!show)}
            >
                <Icon as={HiOutlineMenuAlt3} color='white' w='6' h='6' />
            </Box>

            {/* Menu */}
            <Box
            display={{base: show ? 'block' : 'none',md: 'flex'}}
            w={{base: 'full', md:'auto' }}
            mt={{base: '3', md:'0' }}
            >
                <HeaderMenuItem url='/cart' icon={HiShoppingBag}>Cart</HeaderMenuItem>
                <HeaderMenuItem url='/login' icon={HiUser}>Login</HeaderMenuItem>
            </Box>
        </Flex>
    )
}

export default Header;