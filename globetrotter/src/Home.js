import { Text, Button } from "@chakra-ui/react";
import "./Home.css";
import { Link } from '@chakra-ui/react'
import { Link as NavLink } from "react-router-dom";

function Home() {
    return (
        <div class="Home">
            <Text
                bgGradient='linear(to-r, #99DC94, #4a6ac2)'
                bgClip='text'
                fontSize='5xl'
                fontWeight='bold'
            >  globetrotter
            </Text>
            <p class="info">your AI-travel planner</p>
            <Link as={NavLink} to='/recommend'>
                <Button mt={4} colorScheme='blue'>adventure?</Button>
            </Link>
        </div>
    );
}

export default Home;