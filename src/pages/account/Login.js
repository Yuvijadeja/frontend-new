import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { regexEmail, regexAny } from '../../Regex.js'
import Alert from '../../components/Alert.js'
import Loader from '../../components/Loader.js'
import Error from '../../components/Error.js'
import LoginBack from '../../assets/media/login-back.jpg'

const initialValues = {
  username: '',
  password: '',
}

const validate = values => {
  let errors = {}

  if (!values.username) {
    errors.username = "Required!"
  } else if (!values.username.match(regexEmail)) {
    errors.username = "Invalid Username!"
  }

  if (!values.password) {
    errors.password = "Required!"
  } else if (!values.password.match(regexAny)) {
    errors.username = "Invalid Password!"
  }

  return errors
}

function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState({})
  const [showAlert, setShowAlert] = useState(false)

  const onSubmit = values => {
    setIsLoading(true)
    const apiBaseURL = process.env.REACT_APP_API_BASE_URL
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      "username": values.username,
      "password": values.password
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch(`${apiBaseURL}/accounts/login/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.msg === "Success") {
          sessionStorage.setItem('key', result.key)
          sessionStorage.setItem('user', JSON.stringify({
            id: result.id,
            first_name: result.first_name,
            last_name: result.last_name,
            email: result.email,
            mobile: result.mobile,
            is_superuser: result.is_superuser,
            is_staff: result.is_staff,
            organisation: result.organisation,
          }))
          navigate('/data-sources')
        } else {
          setAlert({ type: "error", message: result.detail })
          setShowAlert(true)
          setIsLoading(false)
        }
      })
      .catch((error) => setAlert(false))
  }

  return (
    <>
      {showAlert && <Alert setShowAlert={setShowAlert} type={alert.type} message={alert.message} />}

      {isLoading && <Loader />}
      <div className='login'>
        <div className='container'>
          <div className='form'>
            <div className='row text-center'>
              <div className='col-12'>
                <p className='brand-name mb-2'>Vittarth</p>

                <h3 className='mb-4'>Share data with privacy</h3>
              </div>

              <div className='col-12'>
                <Formik
                  initialValues={initialValues}
                  validate={validate}
                  onSubmit={onSubmit}
                >
                  {formik => (
                    <Form>
                      <div className='row'>
                        <div className='col-12 mb-3'>
                          <Field type='text' id='username' className="form-control" name='username'
                            placeholder="E-Mail ID" />
                          <ErrorMessage name='username' component={Error} />
                        </div>

                        <div className='col-12 mb-3'>
                          <Field type='password' id='password' className="form-control" name='password'
                            placeholder="Password" />
                          <ErrorMessage name='password' component={Error} />
                          <div className='text-end'>
                            <small>
                              <Link to="">Forgot Password?</Link>
                            </small>
                          </div>
                        </div>
                      </div>

                      <div className='mb-4'>
                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </div>
                        <small>
                          <Link to="">Create an Account</Link>
                        </small>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className='col-12'>
                <p>
                  <b>Connect with us!</b>
                </p>
                <div className='social-media'>
                  <Link to=""><i className="fa-brands fa-linkedin"></i></Link>
                  <Link to="" className='rectangle'><i className="fa-brands fa-youtube"></i></Link>
                  <Link to=""><i className="fa-brands fa-square-facebook"></i></Link>
                  <Link to=""><i className="fa-brands fa-instagram"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className='img'>
            <img src={LoginBack} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login