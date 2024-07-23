import React from 'react'

function DeleteModal({ workbook, setAlert, setShowAlert }) {
  const handleClick = id => {
    setAlert({
      type: "success",
      message: "Deleted successfully...",
    })
    setShowAlert(true)
    console.log(id)
  }

  return (
    <div className='modal fade' id='deleteModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <h4>Are you sure?</h4>
            <p><b>{workbook.name}</b> will be delted permanently!</p>
            <p>If it is shared with someone, he/she can not access it!</p>

            <div className='text-end mt-3'>
              <button
                type='button'
                className='btn btn-danger ps-5 pe-5'
                data-bs-dismiss="modal"
                onClick={() => handleClick(workbook.id)}
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

export default DeleteModal