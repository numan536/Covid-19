import React from 'react';
import axios from 'axios';
import ChartsPage from './Chart2';
class Singlecountry extends React.Component {

    state = {
        eachData: []
    }
    componentDidMount() {
        const country = this.props.match?.params.country;
        console.log('this is couuntry', country)
        axios.get('https://www84.fanaticpixel.com/covid/data/get_country_data/' + country)
            .then((responseTotal) => {
                this.setState({
                    eachData: responseTotal.data
                })

            }).catch(() => console.log('error'));
    }



    render() {
        console.log('this is this.props in single contry', this.state)
        return (
            <div>

                <h1 style={{ textAlign: 'center' }}>Country Name</h1>
                <br />
                <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.state.eachData[0]?.country}</h1>
                <br />
                <h1 style={{ textAlign: 'center' }}>Total Infected</h1>
                <br />
                <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.state.eachData[0]?.total_case}</h1>
                <br />
                <h1 style={{ textAlign: 'center' }}>Total Deaths</h1>
                <br />
                <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.state.eachData[0]?.total_deaths}</h1>
                <br />
                <h1 style={{ textAlign: 'center', }}>Total Recovered </h1>
                <br />
                <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.state.eachData[0]?.total_recovered}</h1>

                <ChartsPage data={this.state.eachData} />

            </div >
        )
    }
}



export default Singlecountry;