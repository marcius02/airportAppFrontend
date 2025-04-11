import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../middleware/api";
import { Button, Paper, TextField } from "@mui/material";

const UpdateAirportForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const airport = location.state?.airport || {};

    const [formData, setFormData] = useState({
        name: airport.name || "",
        code: airport.code || "",
        city: airport.city || "",
        country: airport.country || "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/airports/${airport.id}`, formData)
            alert("Airport updated successfully!");
            navigate("../airports");
        } catch(error) {
            console.error("Error updating ariport:", error);
        }
    };

    return (
        <Paper sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleOnChange}
                />
                <TextField 
                    label="Code"
                    name="code"
                    value={formData.code}
                    onChange={handleOnChange}
                />
                <TextField 
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleOnChange}
                />
                <TextField 
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleOnChange}
                />
                <Button style={{margin: "20px auto" }} type="submit" variant="contained">
                    Update Airport
                </Button>
            </form>
        </Paper>
    );
};

export default UpdateAirportForm;