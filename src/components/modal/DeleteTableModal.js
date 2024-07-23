import React from 'react'

function DeleteTableModal({ tables, setTables, selectedTable, setSeletctedTable }) {
  const handleClick = () => {
    setTables(tables.filter(table => table.value !== selectedTable.value))
    setSeletctedTable({})
  }

  return (
    <div className='modal fade' id='deleteTableModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <h4>Are you sure?</h4>
            <p><b>{selectedTable.label}</b> will be delted permanently!</p>

            <div className='text-end mt-3'>
              <button
                type='button'
                className='btn btn-danger ps-5 pe-5'
                data-bs-dismiss="modal"
                onClick={handleClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteTableModal