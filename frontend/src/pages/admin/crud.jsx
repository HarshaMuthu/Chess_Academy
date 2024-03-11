import { useState } from 'react';
import Adminbar from './sidebar';

function CrudApp() {
    const [entries, setEntries] = useState([]);
    const [academyName, setAcademyName] = useState('');
    const [venue, setVenue] = useState('');
    const [district, setDistrict] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { academyName, venue, district, phoneNumber, address };
        setEntries([...entries, newEntry]);
        setAcademyName('');
        setVenue('');
        setDistrict('');
        setPhoneNumber('');
        setAddress('');
    };

    const handleDelete = (index) => {
        const updatedEntries = entries.filter((entry, i) => i !== index);
        setEntries(updatedEntries);
    };

    const handleEdit = (index) => {
        const entry = entries[index];
        setAcademyName(entry.academyName);
        setVenue(entry.venue);
        setDistrict(entry.district);
        setPhoneNumber(entry.phoneNumber);
        setAddress(entry.address);
        handleDelete(index);
    };

    return (
        <div>
            <div>
                <Adminbar/>
            </div><br></br><br></br>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}>
            <div style={{ flex: '1', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2>Add New Entry</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="academyName">Academy Name:</label><br />
                    <input type="text" id="academyName" name="academyName" value={academyName} onChange={(e) => setAcademyName(e.target.value)} required /><br />
                    <label htmlFor="venue">Venue:</label><br />
                    <input type="text" id="venue" name="venue" value={venue} onChange={(e) => setVenue(e.target.value)} required /><br />
                    <label htmlFor="district">District:</label><br />
                    <input type="text" id="district" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} required /><br />
                    <label htmlFor="phoneNumber">Phone Number:</label><br />
                    <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required /><br />
                    <label htmlFor="address">Address:</label><br />
                    <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required /><br />
                    <button type="submit" className="btn">Add</button>
                </form>
            </div>
            <div style={{ flex: '1', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2>Entries</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Academy Name</th>
                            <th>Venue</th>
                            <th>District</th>
                            <th>Phone Number</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.academyName}</td>
                                <td>{entry.venue}</td>
                                <td>{entry.district}</td>
                                <td>{entry.phoneNumber}</td>
                                <td>{entry.address}</td>
                                <td>
                                    <button className="btn edit" onClick={() => handleEdit(index)}>Edit</button>
                                    <button className="btn delete" onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default CrudApp;
