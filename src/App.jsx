import { useState } from 'react'
import { useSelector } from 'react-redux'
import TableReq from './components/Table/TableReq'
import Map from './components/Map/Map'
import 'devextreme/dist/css/dx.light.css'
import './App.css'

const App = () => {
  const data = useSelector((state) => state.data)
  const [points, setPoints] = useState(null)
  return (
    <div className='App'>
      <TableReq data={data} setPoints={setPoints} />
      <Map points={points} />
    </div>
  )
}

export default App
