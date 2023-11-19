import { View } from 'react-native';
import { Button , Text } from '@rneui/themed';
import { getCurrentYearAndSeason } from '../functions/Utils';
import Filter from './Filter';

function Home({ navigation }) {

    const handleFilterChange = ({ selectedSeason , selectedYear }) => {
        console.log(`Selected Season: ${selectedSeason}, Selected Year: ${selectedYear}`);
    };

    const { year , season } = getCurrentYearAndSeason();
    return (
        <View>
            <Text h4 style={{textAlign:'center' , marginTop:20}}>The ticket to the future is always open.</Text>
            <Text style={{textAlign:'center' , marginTop:20}}>{`Current year: ${year}, Current season: ${season}`}</Text>
            <Filter onFilterChange={handleFilterChange} />
        </View>
    );
}
  
export default Home;
