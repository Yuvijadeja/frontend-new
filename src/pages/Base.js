import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import MenuBar from '../components/MenuBar'
import Alert from '../components/Alert'

function Base() {
  const [alert, setAlert] = useState({})
  const [showAlert, setShowAlert] = useState(false)
  const alertContext = [setAlert, setShowAlert]

  if (sessionStorage.getItem('key')) {
    return (
      <>
        {showAlert && <Alert setShowAlert={setShowAlert} type={alert.type} message={alert.message} />}

        <MenuBar />
        <div id='main'>
          <Outlet context={alertContext} />
        </div>
      </>
    )
  } else {
    window.location.href = '/login'
  }

}

export default Base