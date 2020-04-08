import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
class ChartsPage extends React.Component {


    render() {
        console.log('this is props in chart2', this.props)

        const updatedate = this.props.data.map((item) => {
            return new Date(item.updated_at).toLocaleDateString()



        })

        const totalcount = this.props.data.map((item) => {
            return item.total_case.replace(',', '')
        });


        const totaldata = {
            dataBar: {
                labels: updatedate,
                datasets: [
                    {
                        label: "Cases",
                        data: totalcount,
                        backgroundColor: [
                            "rgba(255, 134,159,0.4)",
                            "rgba(98,  182, 239,0.4)",
                            "rgba(255, 218, 128,0.4)",
                            "rgba(113, 205, 205,0.4)",
                            "rgba(170, 128, 252,0.4)",
                            "rgba(255, 177, 101,0.4)"
                        ],
                        borderWidth: 2,
                        borderColor: [
                            "rgba(255, 134, 159, 1)",
                            "rgba(98,  182, 239, 1)",
                            "rgba(255, 218, 128, 1)",
                            "rgba(113, 205, 205, 1)",
                            "rgba(170, 128, 252, 1)",
                            "rgba(255, 177, 101, 1)"
                        ]
                    }
                ]
            },
            barChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            barPercentage: 1,
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: "rgba(0, 0, 0, 0.1)"
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }

        }


        return (
            <MDBContainer>
                <h3 className="mt-5">Country</h3>
                <Bar data={totaldata.dataBar} options={totaldata.barChartOptions} />
            </MDBContainer>
        );
    }
}



export default ChartsPage;