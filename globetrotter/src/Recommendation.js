import {
    Input, FormControl, FormLabel, Button, SimpleGrid, Box, FormHelperText, HStack, PinInput, PinInputField, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb,
} from '@chakra-ui/react';
import { Link } from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import Select from 'react-select';
import './Recommendation.css';
import { useState } from 'react';

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
    const [range, setRange] = useState([20, 40]);

    const handleRangeChange = (newRange) => {
        setRange(newRange);
    };

    const choices = [
        "London", "Tokyo", "Paris", "Rome", "Seoul", "Mumbai", "New York City", "Beijing", "Munich", "Istanbul", "Dubai", "Rio de Janeiro", "Sydney", "Los Angeles", "Moscow", "Barcelona", "Cairo", "Buenos Aires", "Los Angeles", "Vienna", "Prague", "Stockholm", "Cape Town", "Lima", "Helsinki", "Prague", "Copenhagen", "Oslo", "Toronto", "Bangkok", "Singapore", "San Francisco", "Berlin", "Athens", "Hong Kong"
    ];


    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
"Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]

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
        menu: provided => ({ ...provided, zIndex: 9999 })
    };

    return (
        <div className="Recommendation">
            <Box>
                <FormControl>
                    <FormLabel >OpenAI API Key</FormLabel>
                    <Input mb={4} placeholder='Enter OpenAI API Key' name="tripName" />
                    <FormLabel >Trip Name</FormLabel>
                    <Input mb={4} placeholder='Give your trip a title!' name="tripName" />
                    <div style={{ marginBottom: "1em" }}>
                        <FormLabel>Region/City</FormLabel>
                        <Select
                            name="region_city"
                            options={choices.map((city) => ({
                                value: city,
                                label: city,
                            }))}
                            placeholder="Select a region/city"
                            mb={4}
                            styles={inputStyles}
                        />
                    </div>
                    <SimpleGrid columns={2} columnGap={10}>
                        <FormLabel>Choose start date</FormLabel>
                        <FormLabel>Choose end date</FormLabel>
                        <Input mb={4} type="date" />
                        <Input type="date" />
                    </SimpleGrid>
                    <FormLabel>Select options below</FormLabel>
                    <FormHelperText mb={2} textAlign={'left'}>Select tags that match your interests and preferences.</FormHelperText>
                    <Select 
                        isMulti
                        name="preferences"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        styles={inputStyles}
                    />
                    <HStack>
                        <FormLabel mt={4}>Seniors</FormLabel>
                        <PinInput mt={6} placeholder='👴'>
                            <PinInputField />
                        </PinInput>
                        <FormLabel mt={4}>Adults</FormLabel>
                        <PinInput mt={6} placeholder='🧑'>
                            <PinInputField />
                        </PinInput>
                        <FormLabel mt={4}>Teens</FormLabel>
                        <PinInput mt={6} placeholder='🧑‍🦱'>
                            <PinInputField />
                        </PinInput>
                        <FormLabel mt={4}>Young Children</FormLabel>
                        <PinInput mt={6} placeholder='🧒'>
                            <PinInputField />
                        </PinInput>
                    </HStack>
                    <FormLabel mt={4}>Price Range ($)</FormLabel>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ textAlign: 'left' }}>Min: {range[0]}</div>
                        <div style={{ textAlign: 'right' }}>Max: {range[1]}</div>
                    </div>
                    <RangeSlider
                        aria-label={['min', 'max']}
                        defaultValue={range}
                        onChange={handleRangeChange}
                    >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                </FormControl>
                <div className="button-container">
                    <Link as={NavLink} to="/recommend">
                        <Button mt={4} colorScheme="blue">
                            submit
                        </Button>
                    </Link>
                </div>
            </Box>
        </div>
    );
}

export default Recommendation;