import { View } from 'react-native';
import Dropdown from 'react-native-input-select';

const SeasonSelect = ({ selectedSeason , onSeasonChange }) => {
    const seasons = [
        { name: 'Spring', value: 'spring' },
        { name: 'Summer', value: 'summer' },
        { name: 'Autumn', value: 'autumn' },
        { name: 'Winter', value: 'winter' },
    ];

    return (
        <View style={{ paddingHorizontal: 15,}}>
            <Dropdown
                label="Season"
                placeholder="Select a season..."
                options={seasons}
                optionLabel={'name'}
                optionValue={'value'}
                selectedValue={selectedSeason}
                onValueChange={(itemValue) => onSeasonChange(itemValue)}
            >
            </Dropdown>
        </View>
    );
};

export default SeasonSelect;
