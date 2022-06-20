import { useState } from "react";

const AddVehicleForm = ({ addNewVehicle }) => {
  const [name, setName] = useState("");
  const [regNum, setRegNum] = useState("");
  const [km, setKm] = useState("");
  const [details, setDetails] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRegNumChange = (event) => {
    setRegNum(event.target.value);
  };

  const handleKmChange = (event) => {
    setKm(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const addVehicle = (event) => {
    event.preventDefault();
    const vehicle = {
      name: name,
      regNumber: regNum,
      km: km,
      details: details,
    };
    setName("");
    setRegNum("");
    setKm("");
    setDetails("");
    addNewVehicle(vehicle);
  };

  return (
    <div>
      <form onSubmit={addVehicle}>
        <label>Nimi: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        ></input>
        <br />
        <label>Rekisterinumero: </label>
        <input
          type="text"
          id="regNum"
          name="regNum"
          value={regNum}
          onChange={handleRegNumChange}
        ></input>
        <br />
        <label>Kilometrit: </label>
        <input
          type="number"
          id="km"
          name="km"
          value={km}
          onChange={handleKmChange}
        ></input>
        <br />
        <label>Lisätiedot: </label>
        <textarea
          rows="5"
          id="details"
          name="details"
          value={details}
          onChange={handleDetailsChange}
        ></textarea>
        <br />
        <input type="submit" value="Lisää ajoneuvo"></input>
      </form>
    </div>
  );
};

export default AddVehicleForm;
