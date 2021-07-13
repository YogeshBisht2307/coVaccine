import React from 'react'
import {CardContent,CardText,CardColumn,CardContainer,CardSection,CardHeading} from './CardsStyle';
import CountUp from 'react-countup';

const Card = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'loading...';
    }
    return (
        <CardSection>
            <CardHeading>Covid-19 Pendemic Live Report</CardHeading>
            <CardContainer>
                <CardColumn>
                    <CardContent>
                        <CardText className="heading">Infected</CardText>
                        <CardText className="data">
                        {/* Countdown up value */}
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={5}
                                separator=","
                            />
                        </CardText>
                        {/* changing unreadable date format into readable using toDateString() function */}
                        <CardText className="date">{new Date(lastUpdate).toDateString()}</CardText>
                        <CardText className="count">Number of Active Cases of COVID-19</CardText>
                    </CardContent>
                </CardColumn>
                <CardColumn>
                    <CardContent>
                    <CardText className="heading">Recovered</CardText>
                        <CardText className="data">
                            {/* Countdown up value */}
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={5}
                                separator=","
                            />
                        </CardText>
                        {/* changing unreadable date format into readable using toDateString() function */}
                        <CardText className="date">{new Date(lastUpdate).toDateString()}</CardText> 
                        <CardText className="count">Number of recoveries from COVID-19</CardText>
                    </CardContent>
                </CardColumn>
                <CardColumn>
                    <CardContent>
                    <CardText className="heading">Deaths</CardText>
                        <CardText className="data">
                            {/* Countdown up value */}
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={5}
                                separator=","
                            />
                        </CardText>
                        {/* changing unreadable date format into readable using toDateString() function */}
                        <CardText className="date">{new Date(lastUpdate).toDateString()}</CardText>
                        <CardText className="count">Number of deaths caused by COVID-19</CardText>
                    </CardContent>
                </CardColumn>
            </CardContainer>
        </CardSection>
    )
}

export default Card;
