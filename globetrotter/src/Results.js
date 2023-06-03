import './App.css';
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from "@chakra-ui/react";

function Results() {
    return (
        <div className="App">
            <Stat>
                <StatLabel>Collected Fees</StatLabel>
                <StatNumber>£0.00</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>

        </div>
    );
}

export default Results;
