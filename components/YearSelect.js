import { View } from 'react-native';
import Dropdown from 'react-native-input-select';

const YearSelect = ({ selectedYear, onYearChange }) => {
    const years = Array.from({ length: new Date().getFullYear() - 1950 + 1 }, (_, index) => 1950 + index);

    return (
        <View style={{ paddingHorizontal: 10,}}>
            <Dropdown
                label="Year"
                placeholder="Select a year..."
                options={years}
                /* optionLabel={'name'}
                optionValue={'code'} */
                selectedValue={selectedYear}
                onValueChange={(itemValue) => onYearChange(itemValue)}
            >
            </Dropdown>
        </View> 
    );
};

export default YearSelect;
