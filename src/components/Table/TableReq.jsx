import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DataGrid from 'devextreme-react/data-grid'
import { Rnd } from 'react-rnd'
import { columns, states } from './data'
import { updateData } from '../../redux/actions'

const TableReq = (props) => {
  const dispatch = useDispatch()
  const [table, setTable] = useState(null)
  const [size, setSize] = useState({
    width: '320',
    height: '100vh',
  })

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
    table.instance.clearSelection()
    props.setPoints(null)
  }

  const select = (e) => {
    if (e.currentSelectedRowKeys.length) {
      props.setPoints({
        fromLat: e.selectedRowsData[0].latitudeFrom,
        fromLong: e.selectedRowsData[0].longitudeFrom,
        toLat: e.selectedRowsData[0].latitudeTo,
        toLong: e.selectedRowsData[0].longitudeTo,
      })
    }
  }

  return (
    <Rnd
      style={style}
      size={{ width: size.width, height: size.height }}
      disableDragging
      minWidth={320}
      onResizeStop={(e, direction, ref) => {
        setSize({
          width: ref.style.width,
          height: ref.style.height,
        })
      }}
    >
      <div ref={props.refTable}>
        <DataGrid
          ref={(ref) => setTable(ref)}
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
    </Rnd>
  )
}
export default TableReq

const style = {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
  zIndex: 999,
}
