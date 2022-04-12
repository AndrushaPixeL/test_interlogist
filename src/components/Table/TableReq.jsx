import React from 'react'
import { useDispatch } from 'react-redux'
import DataGrid from 'devextreme-react/data-grid'
import { columns, states } from './data'
import { updateData } from '../../redux/actions'
import './Table.css'

const TableReq = (props) => {
  const dispatch = useDispatch()

  const select = (e) => {
    console.log(e)
    props.setPoints({
      fromLat: e.selectedRowsData[0].latitudeFrom,
      fromLong: e.selectedRowsData[0].longitudeFrom,
      toLat: e.selectedRowsData[0].latitudeTo,
      toLong: e.selectedRowsData[0].longitudeTo,
    })
  }

  const save = (data) => {
    const newStateFrom = states.find((el) => el.ID === data.cityFrom)
    const newStateTo = states.find((el) => el.ID === data.cityTo)
    const newData = {
      id: data.id,
      cityFrom: data.cityFrom,
      cityTo: data.cityTo,
      latitudeFrom: newStateFrom.latitude,
      longitudeFrom: newStateFrom.longitude,
      latitudeTo: newStateTo.latitude,
      longitudeTo: newStateTo.longitude,
    }
    dispatch(updateData(newData))
  }

  return (
    <div className='table_container' id='table'>
      <DataGrid
        width={'100%'}
        height={'min-content'}
        dataSource={props.data}
        columns={columns}
        allowColumnResizing={true}
        columnAutoWidth={true}
        keyExpr='id'
        columnFixing={{ enabled: true }}
        editing={{
          mode: 'cell',
          startEditAction: 'dblClick',
          allowUpdating: true,
          allowDeleting: false,
          confirmDelete: false,
        }}
        hoverStateEnabled={true}
        selection={{ mode: 'single' }}
        onSelectionChanged={select}
        showBorders={true}
        showColumnLines={true}
        onSaved={(e) => save(e.changes[0].data)}
      />
    </div>
  )
}
export default TableReq
