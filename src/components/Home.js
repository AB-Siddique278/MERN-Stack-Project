import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);


    // const getdata = async (e) => {
    //     e.preventDefault();


    //     const res = await fetch("/getdata", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },

    //     });

    //     const data = await res.json();
    //     console.log(data);

    //     if (res.status === 404 || !data) {
    //         console.log("error ");


    //     } else {

    //         setUserdata(data)
    //         console.log("Get data");

    //     }
    // }

    // useEffect(() => {
    //     getdata();
    // }, [])


    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async () => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])





    return (
        <div className='mt-3'>
            <div className='container'>
                <div className='add_btn mt-2'>
                    <NavLink to="/register" type="button" class="btn btn-primary"> Add Data </NavLink>

                </div>

                <table class="table mt-5">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Job</th>
                            <th scope="col">Email</th>
                            <th scope="col">Numbers</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <th scope="row">1</th>
                            <td>{getuserdata.name}</td>
                            <td>{getuserdata.work}</td>
                            <td>{getuserdata.email}</td>
                            <td>{getuserdata.mobile}</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i> </button>
                                <button className='btn btn-primary'><i class="fa-solid fa-pen"></i> </button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr> */}

                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.work}</td>
                                            <td>{element.email}</td>
                                           
                                            <td>{element.mobile}</td>
                                            <td className='d-flex justify-content-between'>
                                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i> </button>
                                                <button className='btn btn-primary'><i class="fa-solid fa-pen"></i> </button>
                                                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default Home;