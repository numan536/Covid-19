import React from 'react'
import { Row, Col, Container, Table } from 'react-bootstrap';
import { BrowserRouter, Switch, Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div>


        <div>
          <div style={{ background: "url('/images/corona8.png') no-repeat center", width: "100%", height: "600px", align: 'center', backgroundSize: 'cover' }}>
            <h1 style={{ textAlign: 'center', color: 'black' }}>Total Cases</h1>
            <br />
            <h1 style={{ textAlign: 'center', background: 'Lightblack', color: 'black' }}>{this.props.totalcount[0]?.total_case}</h1>
            <br />
            <h1 style={{ textAlign: 'center', color: 'black' }}>Total Deaths</h1>
            <br />
            <h1 style={{ textAlign: 'center', color: 'black' }}>{this.props.totalcount[0]?.total_deaths}</h1>
            <br />
            <h1 style={{ textAlign: 'center', color: 'black' }}>Total Recovered</h1>
            <br />
            <h1 style={{ textAlign: 'center', color: 'black' }}>{this.props.totalcount[0]?.total_recovered}</h1>
            <h1 style={{ textAlign: 'center', color: 'black' }}>Critical Cases</h1>
            <br />
            <h1 style={{ textAlign: 'center', color: 'black' }}>{this.props.totalcount[0]?.critical_cases}</h1>
          </div>
        </div>
      </div >

    )
  }
}

export default Home;