import React from 'react';
import logo from './logo.svg';
import Tablefor from './components/Tablefor';
import axios from 'axios';
import Home from './components/Home';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { Row, Col, Container, Table, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Singlecountry from './components/Singlecontry';
// import Datatableexample from './components/Bstable';
// import Bstable from './components/Bstable';
import ChartsPage from './components/Chart2';


class App extends React.Component {
  state = {
    allcountries: [],
    totalcount: [],
    eachData: []
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

  // handleclickRow = (country) => {
  //   axios.get('https://www84.fanaticpixel.com/covid/data/get_country_data/' + country)
  //     .then((responseTotal) => {
  //       this.setState({
  //         eachData: responseTotal.data
  //       })

  //     }).catch(() => console.log('error'));
  //   // this.setState({
  //   //   eachData : 
  //   // })
  // }


  render() {
    console.log('this.state', this.state)
    return (


      <div>
        <HashRouter>
          <BrowserRouter>
            {/* <Container fluid> */}
            <Row>
              <Col>
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="/"><img src='/images/corona-logo-1.png' style={{ height: '50px', width: '50px', align: 'center', marginRight: 10 }} />Covid-19</Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Total Cases</Link></Nav.Link>
                    <Nav.Link><Link to="/countries">Countries</Link></Nav.Link>
                  </Nav>
                </Navbar>
              </Col>
            </Row>


            {/* </Container > */}
            <Switch>

              <Route exact path="/" render={(routeProps) => <Home {...routeProps} totalcount={this.state.totalcount} />} />
              <Route path="/countries" render={(routeProps) => <Tablefor {...routeProps} data={this.state.allcountries} />} />
              <Route path="/singlecountry/:country" render={(routeProps) => <Singlecountry {...routeProps} />} />
              <Route path="/countries" render={(routeProps) => <Tablefor {...routeProps} data={this.state.allcountries} />} />

            </Switch>

            {/* < Home totalcount={this.state.totalcount} />
          <div>
            <Bstable data={this.state.allcountries} />
            <ChartsPage data={this.state.eachData} />

          </div> */}



          </BrowserRouter>
        </HashRouter>




      </div>

    )
  }
}

export default App;
