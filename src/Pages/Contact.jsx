import { Box, Flex, Text } from "@chakra-ui/react";
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'

export default function Contact ( ){
    return(
        <>
        <Text textAlign='center' color='#319795' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>Contact</Text>
        <Box p={{base : '10px', md : '30px'}} backgroundColor="teal.300" color="black" mt='10px' >
            <Text textAlign='center' fontSize={{base : '13px', md : '16px'}}>Find Me Around The Web</Text>
            <Flex w={{base :'100%', md : '70%', lg : '50%'}} m='auto' justifyContent='space-between' fontSize={{base : '22px', md : '26px', lg :'30px'}} mt='10px'
           
            
            >
                <Flex flexDirection="column" alignItems="center" gap={3} >
                 <a href="https://www.linkedin.com/in/rakesh-ahire/" target='_blank'> <Text><BsLinkedin/></Text></a>
                 <Text fontSize={{base : '7px', md : '11px', lg :'15px'}}>Rakesh Ahire</Text>
                </Flex>

                <Flex flexDirection="column" alignItems="center" gap={3}>
                   <a href="https://github.com/RakeshAhire" target='_blank'><Text><BsGithub/></Text></a>
                   <Text fontSize={{base : '7px', md : '11px', lg :'15px'}}>Rakesh Ahire</Text>
                </Flex>

                <Flex flexDirection="column" alignItems="center" gap={3}>
                   <a href="tel:+919766555424" ><Text><AiOutlinePhone/></Text></a>
                   <Text fontSize={{base : '7px', md : '11px', lg :'15px'}}>+91 9766555424</Text>
                </Flex>
 
                <Flex flexDirection="column" alignItems="center" gap={3}>
                   <a href="mailto:rakeshahire5424@gmail.com"><Text><GrMail/></Text></a>
                   <Text fontSize={{base : '7px', md : '11px', lg :'15px'}}>rakeshahire5424@gmail.com</Text>
                </Flex>
            </Flex>
        </Box>

        {/* <Box  width={{base : '50%', md : '35%', lg : '25%'}} m='auto' textAlign='center' paddingBottom={{base :'30px', lg : '50px'}}>
            <CopyRight/>
        </Box> */}
        </>
    )
    
}