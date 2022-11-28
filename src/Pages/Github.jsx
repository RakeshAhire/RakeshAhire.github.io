import { Box, Flex, Image, Text, theme } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from '../Context/theme';

 const Github = ( )=> {
  const {Theme} = useContext(AppContext)
    return (
      <>
      <Text textAlign='center' fontSize={{base : '16px',md: '18px', lg : '20px'}} fontWeight="650" mt={{base : '50px', md : '80px', lg :'55px'}} letterSpacing={{base : '3px'}} color='#319795'>GITHUB STATS</Text>
      <Flex width={{base : '75%', md : '85%', lg  :'70%'}} m='auto' direction={{base : 'column-reverse', md : 'row'}} justifyContent='center' alignItems='center' mt={{base : '10px', md : '30px', lg : '50px'}} gap={{base : '15px', md : '35px', lg : '70px'}}>
        <Box>
            <a href="https://github.com/RakeshAhire">
                    <Image width={{base : '250px', md : '480px', lg : '500px'}} src={`https://github-readme-streak-stats.herokuapp.com/?user=rakeshahire&theme=${Theme=='light'?"buefy":'midnight-purple'}&show_icons=true&count_private=true&border=white`}/>
                </a>
        </Box>

        <Box>
        <a href="https://github.com/RakeshAhire">
                <Image width={{base : '300px', md : '490px', lg : '500px'}} src={`https://github-readme-stats.vercel.app/api?username=rakeshahire&count_private=true&show_icons=true&theme=${Theme=='light'?'buefy':'midnight-purple'}`}/>
            </a>
        </Box>
      </Flex>

     <Flex  w={{base : '70%', md : '80%', lg :'30%'}}  m='auto' mt={{base : '15px', md :'25px'}} justifyContent='center' alignItems='center'> 
        <Box>
            <a href="https://github.com/RakeshAhire">
                <Image width={{base : '250px', md : '260px', lg : '350px'}} src={`https://github-readme-stats.vercel.app/api/top-langs/?username=rakeshahire&theme=${Theme==='light'?'buefy':'white'}&show_icons=true&count_private=true`}/>
            </a>
        </Box>
     </Flex>
      </>
    );
  };

export default Github
