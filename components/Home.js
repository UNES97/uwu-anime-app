import { View  , Text } from 'react-native';
import { getCurrentYearAndSeason } from '../functions/Utils';
import Filter from './Filter';

function Home({ navigation }) {

    const handleFilterChange = ({ selectedSeason , selectedYear }) => {
        console.log(`Selected Season: ${selectedSeason}, Selected Year: ${selectedYear}`);
    };

    const { year , season } = getCurrentYearAndSeason();
    return (
        <View>
            <Text style={{ fontWeight: 'bold' , fontSize: 20 , marginVertical: 20 , textAlign: 'center' }}>Find Anime by Year & Season</Text>
            <Filter onFilterChange={handleFilterChange} />
        </View>
    );
}
  
export default Home;
