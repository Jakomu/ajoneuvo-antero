import { useState } from "react";
import LogoHeader from "./components/LogoHeader";
import Vehicle from "./components/Vehicle";
import AddVehicleForm from "./components/AddVehicleForm";

const App = () => {
  const ownedVehicles = [
    {
      id: 1,
      name: "Volkwagen Passat",
      regNumber: "XXX-555",
      km: 500000,
      details: "Laatuauto!",
    },
    {
      id: 2,
      name: "Hobby Deluxe 470",
      regNumber: "WWW-111",
      km: 0,
      details: "Asuntovaunu",
    },
  ];

  const [vehicles, setVehicles] = useState(ownedVehicles);
  const [runningIdNum, setRunningIdNum] = useState(ownedVehicles.length + 1);

  const addNewVehicle = (vehicle) => {
    setRunningIdNum(runningIdNum + 1);
    const newVehicle = {
      id: runningIdNum,
      name: vehicle.name,
      regNumber: vehicle.regNumber,
      km: vehicle.km,
      details: vehicle.details,
    };
    setVehicles(vehicles.concat(newVehicle));
  };

  return (
    <div>
      <header>
        <LogoHeader />
      </header>
      <main>
        <ul>
          {vehicles.map((vehicle) => (
            <Vehicle key={vehicle.id} vehicle={vehicle} />
          ))}
        </ul>
        <AddVehicleForm addNewVehicle={addNewVehicle} />
      </main>
    </div>
  );
};

export default App;
