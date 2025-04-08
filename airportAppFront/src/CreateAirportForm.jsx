import { Button, Paper, TextField } from "@mui/material";
import axios from "./api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAirportForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        code: "",
        city: "",
        country: "",
    });

    const handleOnChange = (e) => {
        const { name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/airports", formData);
            alert("Airport created successfully!");
            navigate("../airports");
        } catch (error){
            console.error("Error creating airport:", error);
            alert("Failed to create airport.");
        }
    }

    return (
        <>
        <h2>CREATE AIRPORT</h2>
        <Paper sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}>
            
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Name"
                    name="name"
                    onChange={handleOnChange}
                />
                <TextField 
                    label="Code"
                    name="code"
                    onChange={handleOnChange}
                />
                <TextField 
                    label="City"
                    name="city"
                    onChange={handleOnChange}
                />
                <TextField 
                    label="Country"
                    name="country"
                    onChange={handleOnChange}
                />
                <Button style={{margin: "20px auto" }} type="submit" variant="contained">
                    Create Airport
                </Button>
            </form>
        </Paper>
        </>
    );
}

export default CreateAirportForm;