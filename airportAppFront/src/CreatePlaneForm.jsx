import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "./api";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CreatePlaneForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        model:"",
        manufacturer:"",
        registrationNumber:"",
        capacity:"",
        yearOfManufacture:"",
    });

    const handleOnChange = (e) => {
        const  {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/planes", formData);
            alert("Plane created successfully!");
            navigate("../planes");
        } catch (error) {
            console.error("Error catching plane", error);
            alert("Failed to create plane.");
        }
    };

    return(
        <Paper sx={{ padding: "20px", maxWidth: "500px"}}>
            <Typography variant="h4" component="div">
                Create New Plane
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Model"
                    name="model"
                    value={formData.model}
                    onChange={handleOnChange}
                    fullWidth
                    margin="normal"
                />
                <TextField 
                    label="Manufacturer"
                    name="manufacturer"
                    value={formData.manufacturer}
                    onChange={handleOnChange}
                    fullWidth
                    margin="normal"
                />
                <TextField 
                    label="Registration Number"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleOnChange}
                    fullWidth
                    margin="normal"
                />
                <TextField 
                    label="Capacity"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleOnChange}
                    fullWidth
                    margin="normal"
                />
                <TextField 
                    label="Year Of Manufacture"
                    name="yearOfManufacture"
                    value={formData.yearOfManufacture}
                    onChange={handleOnChange}
                    fullWidth
                    margin="normal"
                />
                <Button style={{margin: "20px auto" }} type="submit" variant="contained">
                    Update Plane
                </Button>
            </form>
        </Paper>
    );
}

export default CreatePlaneForm;