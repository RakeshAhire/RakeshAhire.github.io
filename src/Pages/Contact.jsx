import { Box, Flex, Text } from "@chakra-ui/react";
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
// import CopyRight from "./CopyRight";

export default function Contact ( ){
    return(
        <>
        <Text textAlign='center' color='#319795' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>Contact</Text>
        <Box pb={{base : '20px', md : '30px'}}>
            <Text textAlign='center' fontSize={{base : '13px', md : '16px'}}>Find Me Around The Web</Text>
            <Flex w={{base :'60%', md : '35%', lg : '25%'}} m='auto' justifyContent='space-around' fontSize={{base : '22px', md : '26px', lg :'30px'}} mt='20px'>
                <Box>
                 <a href="https://www.linkedin.com/in/rakesh-ahire/" target='_blank'> <Text><BsLinkedin/></Text></a>
                </Box>

                <Box>
                   <a href="https://github.com/RakeshAhire" target='_blank'><Text><BsGithub/></Text></a>
                </Box>

                <Box>
                   <a href="tel:+919766555424" ><Text><AiOutlinePhone/></Text></a>
                </Box>
 
                <Box>
                   <a href="mailto:rakeshahire5424@gmail.com"><Text><GrMail/></Text></a>
                </Box>
            </Flex>
        </Box>

        {/* <Box  width={{base : '50%', md : '35%', lg : '25%'}} m='auto' textAlign='center' paddingBottom={{base :'30px', lg : '50px'}}>
            <CopyRight/>
        </Box> */}
        </>
    )
    
}