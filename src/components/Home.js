import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div>

        <div>

        </div>
        <h1 style={{ textAlign: 'center' }}>Total Cases</h1>
        <br />
        <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.props.totalcount[0]?.total_case}</h1>
        <br />
        <h1 style={{ textAlign: 'center' }}>Total Deaths</h1>
        <br />
        <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.props.totalcount[0]?.total_deaths}</h1>
        <br />
        <h1 style={{ textAlign: 'center', }}>Total Recovered</h1>
        <br />
        <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.props.totalcount[0]?.total_recovered}</h1>

      </div>
    )
  }
}

export default Home;