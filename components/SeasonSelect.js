import { View } from 'react-native';
import Dropdown from 'react-native-input-select';

const SeasonSelect = ({ selectedSeason , onSeasonChange }) => {
    const seasons = ['spring', 'summer', 'autumn', 'winter'];
    return (
        <View style={{ paddingHorizontal: 10,}}>
            <Dropdown
                label="Season"
                placeholder="Select a season..."
                options={seasons}
                /* optionLabel={'name'}
                optionValue={'code'} */
                selectedValue={selectedSeason}
                onValueChange={(itemValue) => onSeasonChange(itemValue)}
            >
            </Dropdown>
        </View>
    );
};

export default SeasonSelect;
