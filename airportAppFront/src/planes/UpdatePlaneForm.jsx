import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "../middleware/api";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const UpdatePlaneForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const plane = location.state?.plane || {};

    const [formData, setFormData] = useState({
        model: plane.model || "",
        manufacturer: plane.manufacturer || "",
        registrationNumber: plane.registrationNumber || "",
        capacity: plane.capacity || "",
        yearOfManufacture: plane.yearOfManufacture || "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`planes/${plane.id}`, formData)
            alert("Plane updated successfully!");
            navigate("../planes");
        } catch(error) {
            console.error("Error updating plane:", error);
        }
    };
    
    return (
        <Paper style={{ padding: "20px", maxWidth: "500px"}}>
            <Typography variant="h4" component="div">
                Update Plane
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

export default UpdatePlaneForm;