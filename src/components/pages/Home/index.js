import React, {Fragment,Component} from 'react'
import Navbar from '../../Navbar'
import Hero from './hero/hero'
import Card from './Cards/Cards';
import Chart from './Charts/Charts';
import CountryPicker from './CountryPicker/CountryPicker';
import {fetchData} from '../../../api';
import Footer from '../../Footer';

export default class Home extends Component {

    state = {
        data:{},
        country: '',
    }
    //fetching data;
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async(country) =>{
        console.log(country);
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data , country} = this.state;
        return (
            <Fragment>
                <Navbar/>
                <Hero/>
                <Card data = {data}/>
                <CountryPicker handleCountryChange ={this.handleCountryChange }/>
                <Chart data={data} country={country}/>
                <Footer/>
            </Fragment>
        )
    }
}
