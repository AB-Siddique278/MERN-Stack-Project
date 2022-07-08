import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Card, CardContent } from '@mui/material';
import { NavLink, useParams, useHistory } from 'react-router-dom';
const Details = () => {
    return (
        <div className="container mt-3">
        <h1 style={{ fontWeight: 400 }}>Welcome Abu Bakar Siddique</h1>

        <Card sx={{ maxWidth: 600 }}>
            <CardContent>
                <div className="add_btn">
                    <NavLink to={`/edit/`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                    <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                </div>
                <div className="row">
                    <div className="left_view col-lg-6 col-md-6 col-12">
                        <img src="https://www.lightningit.ca/wp-content/uploads/2021/01/profile4.jpg" style={{ width: 50 }} alt="profile" />
                        <h3 className="mt-3">Name: <span > </span></h3>
                        <h3 className="mt-3">Age: <span ></span></h3>
                        <p className="mt-3"><MailOutlineIcon />Email: <span></span></p>
                        <p className="mt-3"><WorkIcon />Occuption: <span></span></p>
                    </div>
                    <div className="right_view  col-lg-6 col-md-6 col-12">

                        <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 </span></p>
                        <p className="mt-3"><LocationOnIcon />location: <span></span></p>
                        <p className="mt-3">Description: <span></span></p>
                    </div>
                </div>

            </CardContent>
        </Card>
    </div>
    );
};

export default Details;