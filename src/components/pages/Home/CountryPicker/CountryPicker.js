import React,{useState, useEffect} from 'react'
import {CountryPickerSection,CpContainer,CpFormControl,CpSelect,CpOption} from './CountryPickerStyle';
import {fetchCountries} from '../../../../api';

const CountryPicker = ({handleCountryChange }) => {
    //declaring state using useState hooks
    const [fetchedCountries,setFetchedCountries] = useState([]);

     //calling API function using effect Hooks
    useEffect(()=>{
        const fetchAPI= async () =>{
            setFetchedCountries( await fetchCountries());
        }
        fetchAPI();
        //run the effect on mount and whenever the setFetchedCountries state changes.
    },[setFetchedCountries]);

    return (
        <CountryPickerSection>
            <CpContainer>
                <CpFormControl>
                    {/* assigning the selected value in handleCountryChange function*/}
                    <CpSelect defaultValue = "" onChange={(e) => {handleCountryChange(e.target.value)}}>
                        <CpOption value="">Global</CpOption>
                        {/* showing the list of all the countries using array mapping*/}
                        {fetchedCountries.map((country,i) => <CpOption key={i} value={country}>{country}</CpOption>)}
                        
                    </CpSelect>
                </CpFormControl>
            </CpContainer>
        </CountryPickerSection>
    )
}

export default CountryPicker;
