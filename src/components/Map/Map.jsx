import { useRef, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import RoutineMachine from './RoutineMachine'
import 'leaflet/dist/leaflet.css'
import './Map.css'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const Map = (props) => {
  const rMachine = useRef()

  useEffect(() => {
    if (props.points === null && rMachine.current) {
      rMachine.current.setWaypoints([])
    } else if (rMachine.current) {
      rMachine.current.setWaypoints([
        L.latLng(props.points.fromLat, props.points.fromLong),
        L.latLng(props.points.toLat, props.points.toLong),
      ])
    }
  }, [props, rMachine])

  return (
    <MapContainer
      doubleClickZoom={false}
      id='mapId'
      zoom={10}
      center={[55.7522, 37.6156]}
      className='map_container'
    >
      <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        attribution='Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
      />
      <RoutineMachine ref={rMachine} waypoints={props.points} />
    </MapContainer>
  )
}

export default Map
