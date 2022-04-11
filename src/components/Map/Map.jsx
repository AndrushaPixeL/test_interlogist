import { useRef, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import RoutineMachine from './RoutineMachine'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

function Map(props) {
  const rMachine = useRef()
  useEffect(() => {
    if (rMachine.current) {
      rMachine.current.setWaypoints([
        L.latLng(props.points.fromLat, props.points.fromLong),
        L.latLng(props.points.toLat, props.points.toLong),
      ])
    }
  }, [props, rMachine])

  return (
    <div className='map'>
      <MapContainer
        doubleClickZoom={false}
        id='mapId'
        zoom={5}
        center={[55.7522, 37.6156]}
      >
        <TileLayer
          url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
          attribution='Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
        />
        <RoutineMachine ref={rMachine} waypoints={props.points} />
      </MapContainer>
    </div>
  )
}

export default Map
