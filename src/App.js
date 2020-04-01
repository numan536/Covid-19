import React from 'react';
import logo from './logo.svg';
import Tablefor from './components/Table';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap'
import './App.css';

class App extends React.Component {

  state = {
    allcountries: [],
    totalcount: []
  }

  componentDidMount() {
    axios.get('https://www84.fanaticpixel.com/covid/data/get_totals')
      .then((responseTotal) => {
        this.setState({
          totalcount: responseTotal.data
        })
        axios.get('https://www84.fanaticpixel.com/covid/data/get_countries_data')
          .then((responseAll) => {
            this.setState({
              allcountries: responseAll.data
            })
            console.log('response.data', responseAll.data)
          })
      })
      .catch(() => console.log('error'))
  }
  render() {
    console.log('this.state', this.state)
    return (
      <div>
        <div>
          <Container fluid>
            <Row>
              <Col>
                <div className='header'>
                  <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>Covid-19 A Panademic
                  </h1>

                  <Container fluid>
                    <Row style={{ background: 'black' }}>

                      <Col></Col>
                      <Col>
                        <a href='https://hackerthemes.com/bootstrap-cheatsheet/'>
                          <img src='/images/corona2.png' style={{ height: '200px', width: '200px', align: 'center', marginLeft: '20%' }} />
                        </a>
                      </Col>
                      <Col></Col>

                    </Row>
                  </Container>


                </div>

              </Col>
            </Row>


          </Container >
        </div>
        <h1 style={{ textAlign: 'center' }}>Total Cases</h1>
        <br />
        <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.state.totalcount[0]?.total_case}</h1>
        <br />
        <h1 style={{ textAlign: 'center' }}>Total Deaths</h1>
        <br />
        <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.state.totalcount[0]?.total_deaths}</h1>
        <br />
        <h1 style={{ textAlign: 'center', }}>Total Recovered</h1>
        <br />
        <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>{this.state.totalcount[0]?.total_recovered}</h1>

        <div>
          <Tablefor data={this.state.allcountries} />
        </div>


      </div>
    )
  }
}

export default App;
