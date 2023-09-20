'use client'
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";




const Map = ({lat,long,loc,h,userIp}) => {
  // npm i leaflet leaflet-defaulticon-compatibility leaflet-geosearch react-leaflet

  return (
    <MapContainer center={[lat,long]} zoom={16} scrollWheelZoom={false} style={{height: h, width: "100%"}} >
      <Marker 
      position={[lat,long]}
      draggable={true}
      animate={true}
      >
        <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
        <Popup>
          {loc}
        </Popup>
      </Marker>
    </MapContainer>
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
