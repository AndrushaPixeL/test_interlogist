import React from 'react'
import DataGrid from 'devextreme-react/data-grid'

const TableReq = (props) => {
  const select = (e) => {
    console.log(e)
    props.setPoints({
      fromLat: e.selectedRowsData[0].latitudeFrom,
      fromLong: e.selectedRowsData[0].longitudeFrom,
      toLat: e.selectedRowsData[0].latitudeTo,
      toLong: e.selectedRowsData[0].longitudeTo,
    })
  }
  return (
    <>
      <>
        <DataGrid
          dataSource={props.data}
          columns={columns}
          allowColumnReordering={true}
          allowColumnResizing={true}
          columnAutoWidth={true}
          keyExpr='id'
          height={700}
          columnFixing={{ enabled: true }}
          editing={{
            mode: 'cell',
            startEditAction: 'dblClick',
            allowUpdating: true,
            allowDeleting: false,
            confirmDelete: false,
          }}
          stateStoring={{ type: 'localStorage', storageKey: 'TableDataGrid' }}
          hoverStateEnabled={true}
          selection={{ mode: 'single' }}
          onSelectionChanged={select}
          showBorders={false}
          showColumnLines={false}
        ></DataGrid>
      </>
    </>
  )
}
export default TableReq

const columns = [
  {
    dataField: 'id',
    name: '№',
    caption: 'заявка №',
    visibleIndex: 1,
  },
  {
    dataField: 'cityFrom',
    name: 'cityFrom',
    caption: 'Из города',
    visibleIndex: 2,
  },
  {
    dataField: 'cityTo',
    name: 'cityTo',
    caption: 'В город',
    visibleIndex: 3,
  },
]
