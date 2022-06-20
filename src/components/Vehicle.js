const Vehicle = ({ vehicle }) => {
  return (
    <li className="vehicle">
      <h2>{vehicle.name}</h2>
      <p>{vehicle.regNumber}</p>
      <p>{vehicle.km} km</p>
      <p>{vehicle.details}</p>
    </li>
  );
};

export default Vehicle;
