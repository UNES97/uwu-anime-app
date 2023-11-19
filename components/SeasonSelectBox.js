import { Text, Picker } from 'react-native';
import { View } from '@rneui/themed';

const SeasonSelectBox = ({ selectedSeason , onSeasonChange }) => {
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
    return (
        <View>
            <Text>Select Season:</Text>
            <Picker
                selectedValue={selectedSeason}
                onValueChange={(itemValue) => onSeasonChange(itemValue)}
                style={{ width: 200 }}
            >
            {seasons.map((season) => (
                <Picker.Item key={season} label={season} value={season} />
            ))}
            </Picker>
        </View>
    );
};

export default SeasonSelectBox;
