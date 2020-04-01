import React from 'react';
import { Table } from 'react-bootstrap';

class Tablefor extends React.Component {
  render() {
    return (
      <div container>
        <Table striped bordered hover>
          <thead>
            <tr >
              <th>#</th>
              <th>Country</th>
              <th>Total Cases</th>
              <th>New Cases</th>
              <th>Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.data.map(item => {
                return (
                  <tr>

                    <td>{item.ID}</td>
                    <a href='https://www.express.pk/'>
                      <td>{item.country}</td>
                    </a>
                    <td>{item.total_case}</td>
                    <td>{item.new_case}</td>
                    <td>{item.total_deaths}</td>
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