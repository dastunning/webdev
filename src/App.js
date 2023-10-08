import React from 'react';
import ParkingForm from './components/ParkingForm';
import DisplayParkingData from './components/DisplayParkingData';
import withExtraFeaturesHOC from './components/withExtraFeaturesHOC';


function App() {
  const [parkingData, setParkingData] = React.useState(null);

  return (
      <div className="App">
        <h1>Parking Payment System</h1>
        <ParkingForm setParkingData={setParkingData} />
        {parkingData && <DisplayParkingData data={parkingData} />}
      </div>
  );
}

export default withExtraFeaturesHOC(App);