import React, { useState, useRef } from 'react';

const Submit = () => {
  const genderOptions = [
    { id: 'm', label: 'Male' },
    { id: 'f', label: 'Female' },
    { id: 'o', label: 'Others' }
  ];

  const hobbyOptions = [
    { id: 'h1', label: 'Music' },
    { id: 'h2', label: 'Movies' },
    { id: 'h3', label: 'Plastic Model' }
  ];

  const roleOptions = [
    { value: 'General staff', label: 'General staff' },
    { value: 'Developer', label: 'Developer' },
    { value: 'System Analyst', label: 'System Analyst' }
  ];

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    role: 'General staff'
  });
  
  const [hobbies, setHobbies] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hobbyRef = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter((h) => h !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {isSubmitted ? (
        <div style={{ textAlign: 'left' }}>
          <h2>Submission Data</h2>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Firstname:</strong> {formData.firstname}</p>
          <p><strong>Lastname:</strong> {formData.lastname}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
          <p><strong>Role:</strong> {formData.role}</p>
          <button onClick={handleBack} style={{ marginTop: '20px' }}>Go Back to Form</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
          <label>Username: <input type="text" name="username" value={formData.username} onChange={handleChange} required /></label>
          <label>Firstname: <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required /></label>
          <label>Lastname: <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required /></label>
          
          <div>
  <label>Gender:</label>
  <div className="option-group">
    {genderOptions.map(opt => (
      <label key={opt.id}>
        <input
          type="radio"
          name="gender"
          value={opt.label}
          checked={formData.gender === opt.label}
          onChange={handleChange}
        />
        {opt.label}
      </label>
    ))}
  </div>
</div>

          <div>
  <label>Hobbies:</label>
  <div className="option-group">
    {hobbyOptions.map((item, index) => (
      <label key={item.id}>
        <input
          type="checkbox"
          value={item.label}
          checked={hobbies.includes(item.label)}
          ref={el => (hobbyRef.current[index] = el)}
          onChange={onHobbiesToggle}
        />
        {item.label}
      </label>
    ))}
  </div>
</div>


          <label>Role: 
            <select name="role" value={formData.role} onChange={handleChange}>
              {roleOptions.map(r => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </label>

          <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Submit;