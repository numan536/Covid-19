// import React from 'react';
// import { MDBDataTable } from 'mdbreact';

// const DatatablePage = (props) => {



//     const data = {


//         columns: [

//             {
//                 label: 'Country',
//                 field: 'country',
//                 sort: 'asc',
//                 width: 150
//             },
//             {
//                 label: 'Total Cases',
//                 field: 'total_case',
//                 sort: 'asc',
//                 width: 270
//             },
//             {
//                 label: 'New Cases',
//                 field: 'new_case',

//                 sort: 'asc',
//                 width: 200
//             },
//             {
//                 label: 'Deaths',
//                 field: 'total_deaths',
//                 sort: 'asc',
//                 width: 100
//             },
//             {
//                 label: 'New Deaths',
//                 field: 'new_deaths',
//                 sort: 'asc',
//                 width: 150
//             },
//             {
//                 label: 'Total Recovered',
//                 field: 'total_recovered',
//                 sort: 'asc',
//                 width: 100
//             },
//             {
//                 label: 'Active Cases',
//                 field: 'active_cases',
//                 sort: 'asc',
//                 width: 100
//             },
//             {
//                 label: 'Critical Cases',
//                 field: 'critical_cases',
//                 sort: 'asc',
//                 width: 100
//             }
//         ],
//         rows: props.data.map(item => {
//             return {
//                 ...item,
//                 clickEvent: function (params, sec, th) {
//                     console.log('this is parmas in onclick event', params.target.innerHtml, sec, th)
//                 }
//             }
//         })

//     };

//     return (
//         <MDBDataTable
//             striped
//             bordered
//             hover
//             options={options}
//             style={{ color: 'black' }}
//             data={data}
//         />
//     );
// }

// export default DatatablePage;