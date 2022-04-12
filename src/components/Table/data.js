export const states = [
  {
    ID: 1,
    Name: 'Воронеж',
    latitude: 51.672,
    longitude: 39.1843,
  },
  {
    ID: 2,
    Name: 'Москва',
    latitude: 55.7522,
    longitude: 37.6156,
  },
  {
    ID: 3,
    Name: 'Адлер',
    latitude: 43.43,
    longitude: 39.92,
  },
  {
    ID: 4,
    Name: 'Анапа',
    latitude: 44.89,
    longitude: 37.32,
  },
  {
    ID: 5,
    Name: 'Ростов-на-Дону',
    latitude: 47.2313,
    longitude: 39.7233,
  },
  {
    ID: 6,
    Name: 'Белгород',
    latitude: 50.6107,
    longitude: 36.5802,
  },
]

export const columns = [
  {
    dataField: 'id',
    name: '№',
    caption: 'заявка №',
    visibleIndex: 1,
    allowEditing: false,
  },
  {
    dataField: 'cityFrom',
    name: 'cityFrom',
    caption: 'Из города',
    lookup: {
      dataSource: states,
      valueExpr: 'ID',
      displayExpr: 'Name',
    },
    visibleIndex: 2,
  },
  {
    dataField: 'cityTo',
    name: 'cityTo',
    caption: 'В город',
    lookup: {
      dataSource: states,
      valueExpr: 'ID',
      displayExpr: 'Name',
    },
    visibleIndex: 3,
  },
]
