import { Text, Input, Select } from '@chakra-ui/react';
import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Text
        fontSize='5xl'
        fontWeight='bold'
        color='#1c6ca6ff'
      >  globetrotter
      </Text>
      <p class="info">your AI-travel planner</p>
      <FormControl>
        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' />
        <FormLabel>Country</FormLabel>
        <Select placeholder='Select country'>
          <option>United Arab Emirates</option>
          <option>Nigeria</option>
        </Select>
        <FormLabel>Amount</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </div>
  );
}

export default App;
