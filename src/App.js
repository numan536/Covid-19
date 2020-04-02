import React from 'react';
import logo from './logo.svg';
import Tablefor from './components/Tablefor';
import axios from 'axios';
import Home from './components/Home';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { Row, Col, Container, Table } from 'react-bootstrap'
import './App.css';
import { Route } from 'react-router-dom';
import Singlecountry from './components/Singlecontry'

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
        <BrowserRouter>

          <Switch>

            <Route exact path="/" render={(routeProps) => <Home {...routeProps} totalcount={this.state.totalcount} />} />
            <Route path="/Table" render={(routeProps) => <Tablefor {...routeProps} data={this.state.allcountries} />} />
            <Route path="/singlecountry/:country" render={(routeProps) => <Singlecountry {...routeProps} />} />

          </Switch>

          {/* < Home totalcount={this.state.totalcount} /> */}
          <div>
            {/* <Tablefor data={this.state.allcountries} /> */}
          </div>
          <Tablefor data={this.state.allcountries} />

        </BrowserRouter>



      </div>

    )
  }
}

export default App;
