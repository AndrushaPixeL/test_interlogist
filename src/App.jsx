import { useState } from 'react'
import Map from './components/Map/Map'
import TableReq from './components/Table/TableReq'
import 'leaflet/dist/leaflet.css'
import 'devextreme/dist/css/dx.light.css'
import './App.css'

const data = [
  {
    id: 12345,
    cityFrom: 'Воронеж',
    cityTo: 'Москва',
    latitudeFrom: 51.672,
    longitudeFrom: 39.1843,
    latitudeTo: 55.7522,
    longitudeTo: 37.6156,
  },
  {
    id: 23456,
    cityFrom: 'Адлер',
    cityTo: 'Анапа ',
    latitudeFrom: 43.43,
    longitudeFrom: 39.92,
    latitudeTo: 44.89,
    longitudeTo: 37.32,
  },
  {
    id: 34567,
    cityFrom: 'Воронеж',
    cityTo: 'Адлер',
    latitudeFrom: 51.672,
    longitudeFrom: 39.1843,
    latitudeTo: 43.43,
    longitudeTo: 39.92,
  },
  {
    id: 45678,
    cityFrom: 'Москва',
    cityTo: 'Анапа',
    latitudeFrom: 55.7522,
    longitudeFrom: 37.6156,
    latitudeTo: 44.89,
    longitudeTo: 37.32,
  },
  {
    id: 56789,
    cityFrom: 'Ростов-на-Дону',
    cityTo: 'Белгород',
    latitudeFrom: 47.2313,
    longitudeFrom: 39.7233,
    latitudeTo: 50.6107,
    longitudeTo: 36.5802,
  },
]

function App() {
  const [points, setPoints] = useState(null)
  console.log(points)
  return (
    <div className='App'>
      <>
        <TableReq data={data} setPoints={setPoints} />
      </>
      <>
        <Map points={points} />
      </>
    </div>
  )
}

export default App
