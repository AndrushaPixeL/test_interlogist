import { UPDATE_DATA } from './actions'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA:
      const foundIndex = state.data.findIndex(
        (el) => el.id === action.payload.id
      )
      const data = state.data.slice() // .slice() создаст копию массива
      data[foundIndex] = action.payload
      return {
        ...state,
        data,
      }
    default:
      return state
  }
}

const initialState = {
  data: [
    {
      id: 12345,
      cityFrom: 1,
      cityTo: 2,
      latitudeFrom: 51.672,
      longitudeFrom: 39.1843,
      latitudeTo: 55.7522,
      longitudeTo: 37.6156,
    },
    {
      id: 23456,
      cityFrom: 3,
      cityTo: 4,
      latitudeFrom: 43.43,
      longitudeFrom: 39.92,
      latitudeTo: 44.89,
      longitudeTo: 37.32,
    },
    {
      id: 34567,
      cityFrom: 1,
      cityTo: 3,
      latitudeFrom: 51.672,
      longitudeFrom: 39.1843,
      latitudeTo: 43.43,
      longitudeTo: 39.92,
    },
    {
      id: 45678,
      cityFrom: 2,
      cityTo: 4,
      latitudeFrom: 55.7522,
      longitudeFrom: 37.6156,
      latitudeTo: 44.89,
      longitudeTo: 37.32,
    },
    {
      id: 56789,
      cityFrom: 5,
      cityTo: 6,
      latitudeFrom: 47.2313,
      longitudeFrom: 39.7233,
      latitudeTo: 50.6107,
      longitudeTo: 36.5802,
    },
  ],
}
