import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

//fetching the data of number of people infected , confirmed and deaths.
export const fetchData = async(country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const {data : {confirmed, recovered, deaths,lastUpdate}} = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        
    }
}

//fetching the daily data of a specific country or world
export const fetchDailyData = async() =>{
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths :dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        
    }
}

//fetching the name of all the country.
export const fetchCountries = async () =>{
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error)
    }
}