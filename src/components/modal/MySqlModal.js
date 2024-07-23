import React, { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import PopOver from '../PopOver.js'
import Error from '../Error.js'
import { regexURL, regexIP, regexPort, regexAlphaNumeric, regexAlphaNumericSign, regexAny } from '../../Regex.js'

const initialValues = {
  host: '',
  port: '',
  username: '',
  password: '',
  database: '',
  alias: ''
}

const validate = values => {
  let errors = {}

  if (!values.host) {
    errors.host = "Required!"
  } else if (!values.host.match(regexURL) && !regexIP.test(values.host)) {
    errors.host = "Invalid URL or IP address!"
  }

  if (!values.port) {
    errors.port = "Required!"
  } else if (!regexPort.test(values.port)) {
    errors.post = "Invalid Port Number!"
  }

  if (!values.username) {
    errors.username = "Required!"
  } else if (!values.username.match(regexAlphaNumericSign)) {
    errors.username = "Invalid Username!"
  }

  if (!values.password) {
    errors.password = "Required!"
  } else if (!values.password.match(regexAny)) {
    errors.password = "Invalid Password!"
  }

  if (!values.database) {
    errors.database = "Required!"
  } else if (!values.database.match(regexAlphaNumericSign)) {
    errors.database = "Invalid Database!"
  }

  if (!values.alias) {
    errors.alias = "Required!"
  } else if (!values.alias.match(regexAlphaNumeric)) {
    errors.alias = "Invalid Alias!"
  }

  return errors
}

function MySqlModal({ setAlert, setShowAlert }) {
  const [connetionStatus, setConnetionStatus] = useState(false)

  useEffect(() => {
    setConnetionStatus(false)
  }, [])

  const handleTestConnection = () => {
    setAlert({
      type: "success",
      message: "Connection Tested Successfully...",
    })
    setShowAlert(true)
    setConnetionStatus(true)
  }

  const onSubmit = values => {
    setAlert({
      type: "success",
      message: "Database added Successfully...",
    })
    setShowAlert(true)
    console.log(values)
  }

  return (
    <div className="modal fade" id="mySqlModal">
      <div className="modal-dialog ">
        <div className="modal-content">

          <div className="modal-header">
            <div className='background'></div>
            <div className='content'>
              <h5 className="modal-title">
                <i className='fa-solid fa-circle-plus'></i>&nbsp; MySQL Database
              </h5>
            </div>
          </div>

          <div className="modal-body">
            <div className='row'>
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
              >
                {formik => (
                  <Form className='form'>
                    <div className='row'>
                      <div className='col-6 mb-3'>
                        <label htmlFor='host' className='mb-2'>
                          Host &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            IP address or URL of database
                          </PopOver>
                        </label>
                        <Field type='text' disabled={connetionStatus} id='host' className="form-control" name='host' />
                        <ErrorMessage name='host' component={Error} />
                      </div>

                      <div className='col-6 mb-3'>
                        <label htmlFor='port' className='mb-2'>
                          Port &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            Port Number
                          </PopOver>
                        </label>
                        <Field type='number' disabled={connetionStatus} id='port' className="form-control" name='port' />
                        <ErrorMessage name='port' component={Error} />
                      </div>

                      <div className='col-6 mb-3'>
                        <label htmlFor='username' className='mb-2'>
                          Username &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            Username of database
                          </PopOver>
                        </label>
                        <Field type='text' disabled={connetionStatus} id='username' className="form-control" name='username' />
                        <ErrorMessage name='username' component={Error} />
                      </div>

                      <div className='col-6 mb-3'>
                        <label htmlFor='password' className='mb-2'>
                          Password &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            Password of database
                          </PopOver>
                        </label>
                        <Field type='password' disabled={connetionStatus} id='password' className="form-control" name='password' />
                        <ErrorMessage name='password' component={Error} />
                      </div>

                      <div className='col-6 mb-3'>
                        <label htmlFor='database' className='mb-2'>
                          Database &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            Name of Database
                          </PopOver>
                        </label>
                        <Field type='text' disabled={connetionStatus} id='database' className="form-control" name='database' />
                        <ErrorMessage name='database' component={Error} />
                      </div>

                      <div className='col-6 mb-3'>
                        <label htmlFor='alias' className='mb-2'>
                          Alias &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            Alias for Database
                          </PopOver>
                        </label>
                        <Field type='text' disabled={connetionStatus} id='alias' className="form-control" name='alias' />
                        <ErrorMessage name='alias' component={Error} />
                      </div>
                    </div>

                    <div className='pt-3 pb-3'>
                      <button
                        type='button'
                        disabled={connetionStatus}
                        className='btn btn-outline-secondary'
                        onClick={handleTestConnection}
                      >Test Connection
                      </button>&nbsp;&nbsp;&nbsp;&nbsp;

                      {formik.dirty ?
                        <button
                          type='submit'
                          disabled={!connetionStatus}
                          className='btn btn-outline-primary'
                          data-bs-dismiss="modal"
                        >
                          Add Database
                        </button> :
                        <button
                          type='submit'
                          disabled={!connetionStatus}
                          className='btn btn-outline-primary'
                        >
                          Add Database
                        </button>
                      }
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySqlModal