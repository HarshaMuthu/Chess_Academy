import { useState } from 'react';


function Form() {
  const [name, setName] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [coachingType, setCoachingType] = useState('');
  const [level, setLevel] = useState('');
  const [batches, setBatches] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [fideRating, setFideRating] = useState('');
  const [vcaReference, setVcaReference] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      fullName,
      dob,
      gender,
      email,
      mobile,
      coachingType,
      level,
      batches,
      admissionDate,
      state,
      address,
      pincode,
      fideRating,
      vcaReference
    });
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Date of Birth *</label>
          <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Gender *</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Mobile No *</label>
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Type of Coaching *</label>
          <select value={coachingType} onChange={(e) => setCoachingType(e.target.value)} required>
            <option value="">Select</option>
            {/* Add coaching type options */}
          </select>
        </div>
        <div className="form-group">
          <label>Level *</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)} required>
            <option value="">Select</option>
            {/* Add level options */}
          </select>
        </div>
        <div className="form-group">
          <label>Batches *</label>
          <select value={batches} onChange={(e) => setBatches(e.target.value)} required>
            <option value="">Select</option>
            {/* Add batch options */}
          </select>
        </div>
        <div className="form-group">
          <label>Date of Admission *</label>
          <input type="text" value={admissionDate} onChange={(e) => setAdmissionDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>State *</label>
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Residential Address *</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Pincode *</label>
          <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>FIDE Rating (if any)</label>
          <input type="text" value={fideRating} onChange={(e) => setFideRating(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Reference of VCA *</label>
          <input type="text" value={vcaReference} onChange={(e) => setVcaReference(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
