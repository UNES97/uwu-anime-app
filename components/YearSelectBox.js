import { Text, Picker } from 'react-native';
import { View } from '@rneui/themed';

const YearSelectBox = ({ selectedYear, onYearChange }) => {
    const years = Array.from({ length: new Date().getFullYear() - 1950 + 1 }, (_, index) => 1950 + index);

    return (
        <View>
            <Text>Select Year:</Text>
            <Picker
                selectedValue={selectedYear}
                onValueChange={(itemValue) => onYearChange(itemValue)}
                style={{ width: 200 }}
            >
            {years.map((year) => (
                <Picker.Item key={year} label={year.toString()} value={year} />
            ))}
            </Picker>
        </View> 
    );
};

export default YearSelectBox;
