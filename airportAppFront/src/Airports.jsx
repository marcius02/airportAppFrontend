import { useState, useEffect } from "react";
import axios from "./api";

const Airports = () => {
    const [airports, setAirports] = useState([]);

    // Fetch all airports
    const fetchAirports = async () => {
        try{
            const response = await axios.get("http://localhost:8080/api/airports");
            setAirports(response.data);
        } catch (error) {
            console.error("Error fetching airports:", error);
        }
    };

    // Delete an airport by ID
    const deleteAirport = async (id) => {
        try{
            await axios.delete(`http://localhost:8080/api/airports/${id}`);
            // Update the state to remove the deleted book
            setAirports(airports.filter((airport) => airport.id !== id));
        } catch (error){
            console.error("Error deliting airport:", error);
        }
    }

    // Fetch airports on component mount
    useEffect(() => {
        fetchAirports();
    }, []);

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </tbody>
                <tbody>
                    {airports.map((airport) => (
                        <tr key={airport.id}>
                            <td>{airport.name}</td>
                            <td>{airport.code}</td>
                            <td>{airport.city}</td>
                            <td>{airport.country}</td>
                            <td>
                                <button
                                    onClick={() => deleteAirport(airport.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}



export default Airports;