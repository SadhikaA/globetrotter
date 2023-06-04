import { SimpleGrid, Box, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import './Itinerary.css';
import france from './france.jpeg';
import arc from './arc.jpeg';
import mapboxgl from "mapbox-gl";
import { useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FrdWxhOCIsImEiOiJjbGlnemVpc2sxbHRzM2ZtbXNpZHAxY3VuIn0.SL0bzKkz-T_huKrdf5Doaw";

function Itinerary() {

    useEffect(() => {
        mapboxgl.accessToken = mapboxgl.accessToken;
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/sakula8/cligzjwqu003h01r759cf2kkb",
            center: [3, 48.8566],
            width: '100%',
            height: '100%',
            zoom: 8,
        });
        // Cleanup the map instance when the component is unmounted
        return () => map.remove();
    }, []);


    return (
        <div className="Itinerary">
            <SimpleGrid columns={2}>
                <Box>
                    <Heading textAlign={'left'} mb={4} size='md'>France 2-Day Itinerary</Heading>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        marginBottom={4}
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src={arc}
                            marginBottom={4}
                            alt='arc'
                        />
                        <CardBody textAlign={'left'}>
                            <Heading size='md'>Day 1</Heading>

                            <Text py='2'>
                                On the first day, the couple could take a walk along the Axe Historique, beginning at the Arc de Triomphe and ending at Île de la Cité (Notre Dame). Along the way, they can do some shopping on the Champs Elysées, see the Petit Palais and the Grand Palais, and visit the Tuileries Gardens. After that, they can cross Pont Neuf and walk through the Latin Quarter before reaching Notre Dame cathedral on Ile de la Cité.
                            </Text>
                        </CardBody>
                    </Card>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src={france}
                            marginBottom={4}
                            alt='france'
                        />
                        <CardBody textAlign={'left'}>
                            <Heading size='md'>Day 2</Heading>

                            <Text py='2'>
                                On the second day, they could visit the Parc des Buttes-Chaumont in the 19th for a great view and a chance to explore. They can also visit the Parc Zoologique in the 12th, with its artificial mountain, and the Jardin d'Acclimatation in the 16th, with its rides and mini-zoo. They could end the day at the Parc Floral in the Bois de Vincennes, with its themed playgrounds, ping pong tables and picnic areas.
                            </Text>
                        </CardBody>
                    </Card>
                </Box>
                <Box>
                    <div id="map-container">
                        <div id="map"></div>
                    </div>

                </Box>
            </SimpleGrid>
        </div>
    );
}

export default Itinerary;