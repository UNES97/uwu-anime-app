export function getCurrentYearAndSeason() {
    const now = new Date();
    const currentYear = now.getFullYear();
  
    const currentMonth = now.getMonth() + 1;
    let season = '';

    if (currentMonth >= 3 && currentMonth <= 5) {
        season = 'spring';
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        season = 'summer';
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        season = 'autumn';
    } else {
        season = 'winter';
    }
  
    return { year: currentYear , season };
}