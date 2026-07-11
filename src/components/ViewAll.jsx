import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewAll = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json")
            .then((response) => {

                changeData(response.data)

            })
            .catch((error) => {

                console.log(error)

            })

    }

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <div>
            <NavigationBar />

            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">

                        <table className="table table-bordered table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>Reg No</th>
                                    <th>Full Name</th>
                                    <th>Aadhar Number</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Branch</th>
                                    <th>SSLC Mark</th>
                                    <th>Plus Two Mark</th>
                                    <th>UG Degree</th>
                                    <th>UG Mark</th>
                                    <th>PG Degree</th>
                                    <th>PG Mark</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.regNo}</td>
                                        <td>{value.fullName}</td>
                                        <td>{value.aadharNumber}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phoneNumber}</td>
                                        <td>{value.branch}</td>
                                        <td>{value.sslcMark}</td>
                                        <td>{value.plusTwoMark}</td>
                                        <td>{value.ugDegree}</td>
                                        <td>{value.ugMark}</td>
                                        <td>{value.pgDegree}</td>
                                        <td>{value.pgMark}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll