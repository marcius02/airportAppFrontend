import { useState, useEffect } from "react";
import axios from "./api";

const Airports = () => {
    const [airports, setAirports] = useState([]);

    const fetchAirports = async () => {
        try{
            const response = await axios.get("http://localhost:8080/api/airports");
            setAirports(response.data);
        } catch (error) {
            console.error("Error fetching airports:", error);
        }
    };


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
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}



export default Airports;