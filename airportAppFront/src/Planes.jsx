import { Box, Button, Card, CardContent, Paper, Table, Typography } from "@mui/material";
import axios from "./api";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";



const Planes = () => {
    const [planes, setPlanes] = useState([]);
    const navigate = useNavigate();

    // Fetch all planes
    const fetchPlanes = async () => {
        try {
            const response = await axios.get("/planes");
            setPlanes(response.data);
        } catch(error) {
            console.error("Error fetching planes:", error);
        }
    };

    // Delete a plane by ID
    const deletePlane = async (id) => {
        try {
            await axios.delete(`/planes/${id}`);
            setPlanes(planes.filter((plane) => plane.id !== id));
        } catch(error){
            console.error("Error deliting plane:", error);
        }
    };

    // Redirect to update form
    const updatePlane = (plane) => {
        navigate(`/planes/update/${plane.id}`, { state: {plane}});
    };

    // Navigate to create plane form
    const createPlane = () => {
        navigate(`/planes/create`);
    }

    // Fetch planes on component mount 
    useEffect(() => {
        fetchPlanes();
    }, []);

    return (
        <Paper sx={{ padding: "16px" }}>
            <Typography variant="h4" component="div">
                PLANES
            </Typography>
            <Button variant="contained" onClick={createPlane} size="small">
                Create plane
            </Button>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                {planes.map((plane) => (
                    <Box gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }} key={plane.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Model: {plane.model}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Manufacturer: {plane.manufacturer}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Registration Number: {plane.registrationNumber}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Capacity: {plane.capacity}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Year Of Manufacture: {plane.yearOfManufacture}
                                </Typography>
                                <Button variant="outlined" onClick={() => deletePlane(plane.id)}>
                                    Delete
                                </Button>
                                <Button variant="contained" onClick={() => updatePlane(plane)}>
                                    Update
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Paper>
    )
}

export default Planes;