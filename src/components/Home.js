import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    console.log('this.props', this.props)
    return (
      <div>

        <div>
          <Container fluid>
            <Row>
              <Col>
                <div className='header'>
                  <h1 style={{ textAlign: 'center', background: 'black', color: 'white' }}>Covid-19 A Panademic
                  <br />

                    <Link to="/">
                      <button type="button" class="btn btn-primary">Home</button>
                    </Link>

                    <br />

                    <Link to="/Table"> <button type="button" class="btn btn-secondary">Countries Data</button> </Link>

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