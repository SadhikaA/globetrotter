import { Text, Button } from "@chakra-ui/react";
import "./Home.css";
import { Link } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FrdWxhOCIsImEiOiJjbGlnemVpc2sxbHRzM2ZtbXNpZHAxY3VuIn0.SL0bzKkz-T_huKrdf5Doaw";

function Home() {
  useEffect(() => {
    mapboxgl.accessToken = mapboxgl.accessToken;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/sakula8/cligzjwqu003h01r759cf2kkb",
      center: [-90, 90],
      zoom: 0,
    });
    // Cleanup the map instance when the component is unmounted
    return () => map.remove();
  }, []);

  return (
    <div className="Home">
      <div id="map"></div>
      <Text
        className="overlay-text"
        bgGradient="linear(to-r, #99DC94, #4a6ac2)"
        bgClip="text"
        fontSize="6xl"
        paddingBottom={500}
      >
        globetrotter
      </Text>
      <div className="button-container">
        <Link as={NavLink} to="/recommend">
          <Button colorScheme="teal">
            adventure?
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
