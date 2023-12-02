import React, { useState } from 'react';
import { View } from 'react-native';
import SeasonSelect from './SeasonSelect';
import YearSelect from './YearSelect';

const Filter = ({ onFilterChange }) => {
    const [selectedSeason , setSelectedSeason] = useState('spring');
    const [selectedYear , setSelectedYear] = useState(new Date().getFullYear());

    const HandleFilterChange = () => {
        onFilterChange({
            selectedSeason,
            selectedYear,
        });
    };

    return (
        <View>
            <SeasonSelect selectedSeason={selectedSeason} onSeasonChange={setSelectedSeason} />
            <YearSelect selectedYear={selectedYear} onYearChange={setSelectedYear} />
        </View>
    );
};

export default Filter;
