import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Avatar, Card, CardContent } from '@mui/material';
import { NavLink, useParams, useHistory } from 'react-router-dom';
const Details = () => {


 

    const { id } = useParams("");
    console.log(id);
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async () => {

        const res = await fetch(`/getuser/${id}`, {
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
        <div className="container mt-3">
        <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.name} Data</h1>

        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <div className="add_btn">
                    <NavLink to={`/edit/`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                    <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                </div>
                <div className="row">
                    <div className="left_view col-lg-6 col-md-6 col-12">
                    <Avatar alt="Remy Sharp" sx={{ width: 80, height: 80 }} src={getuserdata.img}/>
                        <h3 className="mt-3">Name: <span >{getuserdata.name} </span></h3>
                        <h3 className="mt-3">Age: <span >{getuserdata.age}</span></h3>
                        <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
                        <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p>
                    </div>
                    <div className="right_view  col-lg-6 col-md-6 col-12 mt-5">

                        <p className="mt-5"><PhoneAndroidIcon />mobile: <span>{getuserdata.mobile}</span></p>
                        <p className="mt-3"><LocationOnIcon />location: <span>{getuserdata.add}</span></p>
                        <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
                    </div>
                </div>

            </CardContent>
        </Card>
    </div>
    );
};

export default Details;