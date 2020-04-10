import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import Singlecountry from './Singlecontry';


class Tablefor extends React.Component {
  render() {
    return (
      <div container fluid>
        <Table striped bordered hover responsive>
          <thead>
            <tr >
              <th>#</th>
              <th>Country</th>
              <th>Total Cases</th>
              <th>New Cases</th>
              <th>Deaths</th>
              <th>New Deaths</th>
              <th>Total Recovered</th>
              <th>Active Cases</th>
              <th>Critical Cases</th>

            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map(item => {
                return (
                  <tr>

                    <td>{item.ID}</td>
                    <td>
                      <Link to={`/singlecountry/${item.country}`}>

                        {item.country}
                      </Link>
                    </td>

                    <td >{item.total_case}</td>
                    <td>{item.new_case}</td>
                    <td>{item.total_deaths}</td>
                    <td style={{ background: item.new_deaths ? 'red' : '' }}>{item.new_deaths}</td>
                    <td style={{ background: item.total_recovered ? '#28a745' : '' }}>{item.total_recovered}</td>
                    <td>{item.active_cases}</td>
                    <td>{item.critical_cases}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </Table>
      </div>
    )
  }
}
export default Tablefor;