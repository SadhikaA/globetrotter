import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Recommendation from './Recommendation';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommendation />} />
      </Routes>
    </Router>
  );
}
=======
import Select from 'react-select';
import React, { useState } from "react";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const App = () =>  {
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

  const Form = () => {
    const [inputs, setInputs] = useState({
      trip_name: '',
      country: '',
      region_city: '',
      start: '',
      end: '',
      preferences: '',
    });

    const handleChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputs); // You can replace this with your desired logic to save the inputs
    };

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
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Trip Name</FormLabel>
              <Input type = "text" name = "trip_name" value = {inputs.trip_name} onChange = {handleChange} mb={4} placeholder='Trip Name' />
              <FormLabel>Country</FormLabel>
              <FormHelperText mb={2} textAlign={'left'}>Select the largest region that you will be traveling within.</FormHelperText>
              <div style={{ marginBottom: "1em" }}>
                <Select 
                  name = "country"
                  value = {inputs.country}
                  onChange={handleChange}
                  options={
                    countries.map((country) => ({
                    value: country,
                    label: country,
                  }))}
                  placeholder="Select a country"
                  mb={4}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      textAlign: "left"
                    })
                  }}
                />
              </div>
              <div style={{ marginBottom: "1em" }}>
                <FormLabel>Region/City</FormLabel>
                <Select
                  name = "region_city"
                  value = {inputs.region_city}
                  onChange={handleChange}
                  options={citiesInFrance.map((city) => ({
                    value: city,
                    label: city,
                  }))}
                  placeholder="Select a region/city"
                  mb={4}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      textAlign: "left"
                    })
                  }}
                />
              </div>
              <SimpleGrid columns={2}>
                <FormLabel>Choose start date</FormLabel>
                <FormLabel>Choose end date</FormLabel>
                <Input name = "start" value = {inputs.start} onChange={handleChange} mb={4} type="date" />
                <Input name = "end" value = {inputs.end} onChange={handleChange} type="date" />
              </SimpleGrid>
              <FormLabel>Select options below</FormLabel>
              <FormHelperText mb={2} textAlign={'left'}>Select tags that match your interests and preferences.</FormHelperText>
              <Select
                name = "preferences"
                value = {inputs.preferences}
                onChange={handleChange}
                isMulti
                // name="colors"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    textAlign: "left"
                  })
                }}
              />
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
  };
    return (
      <div>
        <Form />
        console.log(inputs.trip_name);
      </div>

    );

};
>>>>>>> 68da42c (getting working version)

export default App;