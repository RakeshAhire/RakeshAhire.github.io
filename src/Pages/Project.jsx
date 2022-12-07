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
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt="" />
                        <Box p='6' >
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
                                <TfiGithub size={35}  />
                                <GrDeploy size={30}  />
                            </Flex>
                    </Box>
                </Fade>

                {/* {second} */}
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
                                <TfiGithub size={35}  />
                                <GrDeploy size={30}  />
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
                                <TfiGithub size={35}  />
                                <GrDeploy size={30}  />
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
                                <TfiGithub size={35}  />
                                <GrDeploy size={30}  />
                            </Flex>
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
}
export default Project;