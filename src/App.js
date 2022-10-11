
import './App.css';
import {useState , useEffect} from 'react';
import Weather from './components/weather';


function App() {

const [latitude, setLatitude] = useState(0)
const [longitude, setLongitude] = useState(0)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      setIsLoading(false)

    },(error) => {
      console.log(error)
      alert("pakannus epäonnistui")
    })
  } else {
    alert ("selaimesi ei tue paikannusta")
  }

}, [])

if(isLoading) {
  return <p> Ladataan sijaintia..</p>
} else {
  return (

    <div>
     {/* <p> Sijaintisi: {latitude},{longitude}</p> */}
      <h3>
        Position:&nbsp;
        {latitude.toFixed(3)},
        {longitude.toFixed(3)}
      </h3>
      <Weather lat={latitude} lng={longitude} />
    </div>
  );
}

  
}

export default App;
