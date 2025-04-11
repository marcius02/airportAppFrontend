import { Box, Card, CardContent, Paper, Table, Typography } from "@mui/material";
import axios from "./api";
import { useEffect, useState } from "react"



const Planes = () => {
    const [planes, setPlanes] = useState([]);

    const fetchPlanes = async () => {
        try {
            const response = await axios.get("/planes");
            setPlanes(response.data);
        } catch(error) {
            console.error("Error fetching planes:", error);
        }
    };

    useEffect(() => {
        fetchPlanes();
    }, []);

    return (
        <Paper sx={{ padding: "16px" }}>
            <Typography variant="h4" component="div">
                PLANES
            </Typography>
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
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Paper>
    )
}

export default Planes;