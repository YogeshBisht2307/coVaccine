import React, {useState, useEffect} from 'react'
import { fetchDailyData } from '../../../../api'
import { Line ,Bar} from 'react-chartjs-2';
import {ChartSection, ChartContainer} from './ChartStyle';

const Chart = ({data: {confirmed, recovered,deaths}, country}) => {
    //declaring state using useState hooks
    const [dailyData, setDailyData] = useState([]);

    //calling API function using effect Hooks
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
    }
        fetchAPI();
    },[]);

    //lineChart using react-chartjs-2
    const lineChart = (
        //if dailyData is available then show the lineChart
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets: [ 
                    {
                        //maping dailydata array for confirmed cases;
                        data:dailyData.map(({ confirmed }) => confirmed),
                        label:'Infected',
                        borderColor: '#3333ff',
                        fill:true,
                    },
                    {
                         //maping dailydata array for death cases;
                        data:dailyData.map(({ deaths }) => deaths),
                        label:'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0,0, 0.5)',
                        fill:true, 
                    }
                ],
            }}
        />) : null
    );
    //BarChart using react-chartjs-2
    const barChart = (
        //if data(confirmed,recovered,deaths) cases is available then show the BarChart
        confirmed ? (<Bar
            data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets:[{
                        label:'People',
                        backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                        ],
                        //fetching the value of data(confirmed,recovered,deaths) and passing it to the BarChart
                        data :[confirmed.value, recovered.value, deaths.value],
                    }]
            }}
            options = {{
                legend: { display : false},
                title: { display: true , text:`Current State in ${country}`},
            }}
        
        />) : null
    )
    return (
        <ChartSection>
            <ChartContainer>
                {/* if search by country is rendering then show the barChart or if global then LineChart */}
                {country ? barChart : lineChart};
            </ChartContainer>
        </ChartSection>
    )
}

export default Chart;
