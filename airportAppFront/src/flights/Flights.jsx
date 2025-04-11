import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from "../middleware/api";
import { useEffect, useState } from "react"

const Flights = () => {
    const [flights, setFlights] = useState([]);

    // Fetch all flights
    const fetchFlights = async () => {
        try {
            const response = await axios.get("/flights");
            setFlights(response.data);
        } catch (error) {
            console.error("Error fetching flights.", error);
        }
    };

    // Delete flight by id
    const deleteFlight = async (id) => {
        try {
            await axios.delete(`/flights/${id}`);
            setFlights(flights.filter((flight) => flight.id !== id));
        } catch (error) {
            console.error("Error deleting flight.", error);
            alert("Failed to delete flight.")
        }
    }

    // Fetch flights on component mount
    useEffect(() => {
        fetchFlights();
    }, []);

    return(
        <Paper sx={{ width: '100%'}}>
        <TableContainer>
            <Typography variant="h4">
                FLIGHTS
            </Typography>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell style={{ minWidth: 170 }}>Flight number</TableCell>
                        <TableCell>Departure Time</TableCell>
                        <TableCell>Arrival Time</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {flights.map((flight) => (
                        <TableRow key={flight.id}>
                            <TableCell>{flight.flightNumber}</TableCell>
                            <TableCell>{flight.departureTime}</TableCell>
                            <TableCell>{flight.arrivalTime}</TableCell>
                            <TableCell>{flight.status}</TableCell>
                            <TableCell>
                            <Button variant="outlined" onClick={() => deleteFlight(flight.id)}>
                                Delete
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))} 
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
    )
}

export default Flights;