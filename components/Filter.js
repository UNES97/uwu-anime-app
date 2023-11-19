import React, { useState } from 'react';
import { View } from '@rneui/themed';
import SeasonSelectBox from './SeasonSelectBox';
import YearSelectBox from './YearSelectBox';

const Filter = ({ onFilterChange }) => {
    const [selectedSeason , setSelectedSeason] = useState('spring');
    const [selectedYear , setSelectedYear] = useState(new Date().getFullYear());

    const handleFilterChange = () => {
        onFilterChange({
            selectedSeason,
            selectedYear,
        });
    };

    return (
        <View>
            <SeasonSelectBox selectedSeason={selectedSeason} onSeasonChange={setSelectedSeason} />
            <YearSelectBox selectedYear={selectedYear} onYearChange={setSelectedYear} />
        </View>
    );
};

export default Filter;
