import { Icon, Link } from "@chakra-ui/react";

const HeaderMenuItem = ({url, icon, children}) => {
    return (
        <Link
        href={url}
        fontSize='sm'
        fontWeight='semibold'
        letterSpacing='uppercase'
        textTransform='uppercase'
        mr='5'
        gap='1'
        display='flex'
        alignItems='center'
        color='whiteAlpha.800'
        mt={{base: '2', md: '0'}}
        _hover={{textDecor: 'none', color: 'whiteAlpha.500 '}}
        >
            <Icon as={icon} ml='4' w='4' h='4'/>
            {children}
        </Link>
    )
}

export default HeaderMenuItem;