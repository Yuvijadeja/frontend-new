import React from 'react'

function DeleteDSModal({ id, alias, setAlert, setShowAlert }) {
  const handleClick = id => {
    setAlert({
      type: 'success',
      message: 'Deleted successfully',
    })
    setShowAlert(true)
    console.log(id)
  }

  return (
    <div className='modal fade' id='deleteDSModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <h4>Are you sure?</h4>
            <p><b>{alias}</b> will be delted permanently!</p>
            <p>If it is used in any workbook, it will be deleted too!</p>

            <div className='text-end mt-3'>
              <button
                type='button'
                className='btn btn-danger ps-5 pe-5'
                data-bs-dismiss="modal"
                onClick={() => handleClick(id)}
              >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteDSModal