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
            <Text>Welcome</Text>
            <Filter onFilterChange={handleFilterChange} />
        </View>
    );
}
  
export default Home;
