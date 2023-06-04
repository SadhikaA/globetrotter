import { NumberInputStepper, Input, NumberInputField, NumberInput, FormControl, FormLabel, Button, SimpleGrid, Box, FormHelperText, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import Select from 'react-select';
import './Recommendation.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";

const options = [
    { value: 'kid-friendly', label: 'kid-friendly' },
    { value: 'elderly', label: 'wheelchair accessible' },
    { value: 'arts & culture', label: 'arts & culture' },
    { value: 'food & drink', label: 'food & drink' },
    { value: 'outdoors', label: 'outdoors' },
    { value: 'shopping', label: 'shopping' },
    { value: 'nightlife', label: 'nightlife' },
    { value: 'nature', label: 'nature' },
    { value: 'entertainment', label: 'entertainment' },
    { value: 'sports', label: 'sports' },
    { value: 'adventure', label: 'adventure' }
]


function Recommendation() {

    const handleSubmit = async () => {
        const formData = {
            // Retrieve form data and structure it as needed
            tripName: formData.tripName,
            country: '...',
            // ... other form fields ...
        };
        try {
            const response = await axios.post('http://127.0.0.1:5000/', formData);
            console.log(response.data);  // Log the response from the backend
            // Perform any necessary actions after successful submission
        } catch (error) {
            console.error(error);
            // Handle errors, if any
        }
    };

    const handleChange = (e) => {
        // Handle changes to form fields
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

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

    const inputStyles = {
        control: (provided, { colorMode }) => ({
            ...provided,
            textAlign: 'left',
        }),
        option: (provided, { colorMode }) => ({
            ...provided,
            color: 'black', // Set text color to black
        }),
        singleValue: (provided, { colorMode }) => ({
            ...provided,
            color: 'black', // Set text color to black
        }),
    };

    const [formData, setFormData] = useState({
        tripName: '',
        country: '',
        city: '',
        startDate: '',
        endDate: '',
        tags: [],
        maxPrice: 0
    });

    return (
        <div className="Recommendation">
            <form onSubmit={handleSubmit}>
                <Box>
                    <FormControl>
                        <FormLabel onChange={handleChange} value={formData.tripName}>Trip Name</FormLabel>
                        <Input mb={4} placeholder='Trip Name' onChange={(e) => setFormData({ ...formData, tripName: e.target.value })} value={formData.tripName} />
                        <FormLabel>Country</FormLabel>
                        <FormHelperText mb={2} textAlign={'left'}>Select the largest region that you will be traveling within.</FormHelperText>
                        <div style={{ marginBottom: "1em" }}>
                            <Select
                                options={countries.map((country) => ({
                                    value: country,
                                    label: country,
                                }))}
                                placeholder="Select a country"
                                mb={4}
                                styles={inputStyles}
                            />
                        </div>
                        <div style={{ marginBottom: "1em" }}>
                            <FormLabel>Region/City</FormLabel>
                            <Select
                                options={citiesInFrance.map((city) => ({
                                    value: city,
                                    label: city,
                                }))}
                                placeholder="Select a region/city"
                                mb={4}
                                styles={inputStyles}
                            />
                        </div>
                        <SimpleGrid columns={2}>
                            <FormLabel>Choose start date</FormLabel>
                            <FormLabel>Choose end date</FormLabel>
                            <Input mb={4} type="date" />
                            <Input type="date" />
                        </SimpleGrid>
                        <FormLabel>Select options below</FormLabel>
                        <FormHelperText mb={2} textAlign={'left'}>Select tags that match your interests and preferences.</FormHelperText>
                        <Select
                            isMulti
                            name="choices"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            styles={inputStyles}
                        />
                        <FormLabel mt={4}>Max Price ($)</FormLabel>
                        <NumberInput max={10000} min={10}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Button mt={4} mb={4} type="submit" colorScheme='teal'>Submit</Button>
                        <div className="button-container">
                            <Link as={NavLink} to="/itinerary">
                                <Button colorScheme="teal">
                                    Go to itinerary
                                </Button>
                            </Link>
                        </div>
                    </FormControl>
                </Box>
            </form>
        </div>
    );
}

export default Recommendation;