import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Image, Badge, Text } from '@chakra-ui/react'
const Project = () => {

    return (
        <Box>
            <Fade up>
                <Text textAlign='center' color='#319795' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>Project's</Text>
            </Fade>

            <Box  w={"80%"} display="grid" gridTemplateColumns="repeat(2,1fr)" m={"auto"} mt="20px" gap={20}>
                <Fade left>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image w='full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt="" />
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    TECH STACK
                                </Badge>
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
                </Fade>

                {/* {second} */}

                <Fade right>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image w='full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt="" />
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    TECH STACK
                                </Badge>
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
                </Fade>
                {/* {third} */}

                <Fade left>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image w='full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt="" />
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    TECH STACK
                                </Badge>
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
                </Fade>
                {/* {fourth} */}

                <Fade right>
                    <Box w={"100%"} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image w='full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYWoQIj4S37bMrdOk66DzLfO5CBmemLpNpg&usqp=CAU" alt="" />
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'>
                                    TECH STACK
                                </Badge>
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
                </Fade>
            </Box>
        </Box>
    );
}
export default Project;