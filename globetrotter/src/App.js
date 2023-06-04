import { Text, Input, Select, Card, CardHeader, FormControl, FormLabel, Heading, CardBody, CardFooter, Button, SimpleGrid, Box, FormHelperText, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, SliderTrack, SliderFilledTrack, SliderMarker } from '@chakra-ui/react';
import './App.css';
import TagBar from "./TagBar";

function App() {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

  const citiesInFrance = [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
    "Bordeaux",
    "Lille",
    "Rennes",
    "Reims",
    "Le Havre",
    "Cannes",
    "Saint-Étienne",
    "Toulon",
    "Angers",
    "Grenoble",
    "Dijon",
    "Nîmes"
    // Add more cities as needed
  ];


  return (
    <div className="App">
      <Text
        bgGradient='linear(to-r, #99DC94, #4a6ac2)'
        bgClip='text'
        fontSize='5xl'
        fontWeight='bold'
      >  globetrotter
      </Text>
      <p class="info">🌎 your AI-travel planner</p>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <FormControl>
            <FormLabel>Trip Name</FormLabel>
            <Input mb={4} placeholder='Trip Name' />
            <FormLabel>Country</FormLabel>
            <FormHelperText mb={2} textAlign={'left'}>Select the largest region that you will be traveling within</FormHelperText>
            <Select mb={4} placeholder='Select a country'>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Select>
            <FormLabel>Region/City</FormLabel>
            <Select mb={4} placeholder='Select a region/city'>
              {citiesInFrance.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Select>
            <FormLabel>Choose start date</FormLabel>
            <Input mb={4} type="date" />
            <FormLabel>Choose end date</FormLabel>
            <Input type="date" />
            <TagBar />
            <RangeSlider aria-label={['20', '120']} defaultValue={[10, 30]}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>

              <CustomSliderLabel value={0}>0</CustomSliderLabel>
          <CustomSliderLabel value={50}>50</CustomSliderLabel>
          <CustomSliderLabel value={100}>100</CustomSliderLabel>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Button mt={4} colorScheme='blue'>Submit</Button>
          </FormControl>
        </Box>
        <Box>
          <Card align='center' variant='outline'>
            <CardHeader>
              <Heading size='md'> Final Trip Settings</Heading>
            </CardHeader>
            <CardBody>
              <Text>Info goes here</Text>
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>

    </div>
  );
}

function CustomSliderLabel({ value }) {
  return (
    <Box
      position="absolute"
      transform={`translateX(${value}%)`}
      top="-20px"
      textAlign="center"
      width="40px"
      fontSize="sm"
      fontWeight="bold"
    >
      {value}
    </Box>
  );
}

export default App;