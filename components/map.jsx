'use client'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from 'react';



const Map = ({h,userIp}) => {
  // npm i leaflet leaflet-defaulticon-compatibility leaflet-geosearch react-leaflet
  
  let url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_cGZ6gRQvSdxr4UX4jBMdUr95auep7&ipAddress=";
  let url_IpAddress = "https://ipapi.co/json";
  const [loc,setLoc] = useState(null);
  useEffect(()=>{
    fetch(url_IpAddress).then((response)=>(response.json())).then(
      (resp)=>(
        console.log(resp.ip),
        fetch((userIp===null || userIp ==="")?(url+resp.ip):(url+userIp)).
        then(response=>response.json()).
        then(resp=>setLoc({"lat":resp.location.lat,"long":resp.location.lng,"region":resp.location.region,"city":resp.location.city,"country":resp.location.country}))
        ))
    //
    //(resp)=>(setLoc({"lat":resp.latitude,"long":resp.longitude,"country":resp.country,"city":resp.city,"region":resp.region}))
  },[userIp])
  //center={[loc.lat,loc.long]}
  // let long =27.9150592;
  // let lat = -26.2602752;
  return (
    <>{(loc===null)?<div>Loading...</div>:(<MapContainer center={[loc.lat,loc.long]} zoom={16} scrollWheelZoom={false} style={{height: h, width: "100%"}} >
      {console.log("\n ********** \n"+loc.lat+"\n"+loc.long)}
    <Marker 
    position={[loc.lat,loc.long]}
    draggable={true}
    animate={true}
    >
      <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
      <Popup>
        {loc.city}
      </Popup>
    </Marker>
  </MapContainer>)}</>
  )
}

export default Map;

// let endPoint = `http://ip-api.com/json/${userIp}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,currency,isp,org,as,mobile`;
  

//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = JSON.parse(this.responseText);
//       if(response.status !== 'success') {
//         console.log('query failed: ' + response.message);
//         return
//       }
//       // Redirect
//       console.log(this.responseText)
//     }
//   };
//   xhr.open('GET', endPoint, true);
//   xhr.send();
