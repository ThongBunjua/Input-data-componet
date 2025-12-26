import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const genderList = ["Male", "Female", "Others"];
  const hobbyList = ["Music", "Movies", "Plastic Model"];
  const roleList = ["General Staff", "Developer", "System Analyst"];

  function onHobbiesToggle(event) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <div className="container">

      <div className="field">
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="field">
        <label>Firstname</label>
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>

      <div className="field">
        <label>Lastname</label>
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>

      <div className="field">
        <label>Gender</label>
        <div className="radio-group">
          {genderList.map((g) => (
            <label key={g}>
              <input
                type="radio"
                name="gender"
                value={g}
                onChange={(e) => setGender(e.target.value)}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Hobbies</label>
        <div className="checkbox-group">
          {hobbyList.map((h) => (
            <label key={h}>
              <input
                type="checkbox"
                value={h}
                onChange={onHobbiesToggle}
              />
              {h}
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Role</label>
        <select onChange={(e) => setRole(e.target.value)}>
          {roleList.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="preview">
        <p>Username: {username}</p>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Gender: {gender}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
        <p>Role: {role}</p>
      </div>
    </div>
  );
}

export default Register;
