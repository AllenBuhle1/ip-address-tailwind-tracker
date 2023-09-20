import Map from "../components/map.jsx";
export default function Home() {
  //To get Location: https://geo.ipify.org/
  //To draw the map: https://leafletjs.com
  //Demo Cord: long="40.8054",lat="-74.0241"  
  let long =27.9150592;
  let lat = -26.2602752;
  let mapHeight = "90vh";
  return (
    <>
      <h2 className="text-blue-700">IP Address Tracker Search for any IP address or domain IP Address Location Timezone UTC ISP</h2>
    <Map long={long} lat={lat} loc="UJ SWC" h={mapHeight} 
  userIp = "196.21.153.5"/>
    </>
  )
}
