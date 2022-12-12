import React from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Image, Badge, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../Context/theme';
import { TfiGithub } from "react-icons/tfi";
import { GrDeploy } from "react-icons/gr";
const Project = () => {
    // const { Theme } = useContext(AppContext);
    return (
        <Box>
            <Fade up>
                <Text textAlign='center' color='#319795' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>Project's</Text>
            </Fade>

            <Box w={"80%"} display={{ base: "column", sm: "column", lg: "grid" }} gridTemplateColumns="repeat(2,1fr)" m={"auto"} mt="20px" gap={20}>
                {/* {first} */}
                <Fade left>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10}  >
                        <Image w='full' src="/Projects/Gearbest.png" alt="gearbest" h={{lg:'300px'}} />
                        <Box p='6' >
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Gearbest</Text>
                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} h={{lg:'80px'}} mb={{lg:6}} >
                                Gearbest is an Chinese e-commerce company. It provides customers to computer ,mobile and all electronics accessories and products across websites.
                                {/* Gearbest provides the most cost-efficient delivery service covering 200+ countries and regions, most of which enjoy free door-to-door delivery. */}
                            </Box>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' mt={3}  >
                                <Badge borderRadius='full' px='2' colorScheme='teal' fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(2,1fr)" gap={1} >
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        JAVA-Script
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        BOOT strap
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a href="https://github.com/RakeshAhire/needless-marble-4977" target="_blank"> <TfiGithub size={35} /></a>
                            <a href='https://gear-best-clone.netlify.app/' target="_blank"><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Fade>

                {/* {second} */}
                <Fade right>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src="/Projects/Nykaa.png" alt="Nykaa" h={{lg:'300px'}} />
                        <Box p='6'>
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Nykaa</Text>
                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} h={{lg:'80px'}} mb={{lg:6}}>Nykaa is an Indian e-commerce company. It sells beauty, wellness, and fashion products across websites, mobile apps, and 100+ offline stores.</Box>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' mt={3} >
                                <Badge borderRadius='full' px='2' colorScheme='teal' fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(2,1fr)" gap={1} >
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        React
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        JAVA-Script
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        Chakra Ui
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a href="https://github.com/RakeshAhire/expensive-afterthought-589" target="_blank"> <TfiGithub size={35} /></a>
                            <a href='https://nykaaclone-six.vercel.app' target="_blank"><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Fade>

                {/* {third} */}
                <Fade left>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt="" />
                        <Box p='6'>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(2,1fr)" gap={1}>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        JAVA-Script
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        BOOT strap
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <TfiGithub size={35} />
                            <GrDeploy size={30} />
                        </Flex>
                    </Box>
                </Fade>

                {/* {fourth} */}
                <Fade right>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt="" />
                        <Box p='6'>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(2,1fr)" gap={1}>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        JAVA-Script
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        BOOT strap
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <TfiGithub size={35} />
                            <GrDeploy size={30} />
                        </Flex>
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
}
export default Project;