import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Error from '../Error.js'
import { regexEmail } from '../../Regex.js'

const initialValues = {
  email: ''
}

const validate = values => {
  let errors = {}

  if (!values.email) {
    errors.email = "Required!"
  } else if (!values.email.match(regexEmail)) {
    errors.email = "Invalid E-Mail Id"
  }

  return errors
}

function Share({ sharedWith, setAlert, setShowAlert }) {
  const onSubmit = values => {
    setAlert({
      type: 'success',
      message: 'Shared successfully',
    })
    setShowAlert(true)
    console.log(values)
  }

  const onClick = id => {
    setAlert({
      type: 'success',
      message: 'Deleted successfully',
    })
    setShowAlert(true)
    console.log(id)
  }

  return (
    <div className="modal fade" id="share">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body text-start">
            <div className='row'>
              <h5 className='mb-3'>Share Workbook</h5>
              <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
              >
                {formik => (
                  <Form className='form'>
                    <div className='row'>
                      <div className='col-12 mb-2'>
                        <Field type='email' id='email' placeholder="Enter E-Mail Id" className="form-control" name='email' />
                        <ErrorMessage name='email' component={Error} />
                      </div>

                      <div className='col-12 mb-3 text-end'>
                        <button type='submit' className='btn btn-outline-primary'>Share</button>
                      </div>

                      <div className='col-12' id='sharedWith'>
                        <h5>Shared with</h5>
                        {sharedWith.map((data, index) => {
                          return (
                            <div className='row mb-3' key={index}>
                              <div className='col-1 text-secondary'>
                                <i className='fa-solid fa-circle-user'></i>
                              </div>
                              <div className='col-10'>{data.email}</div>
                              <div className='col-1 text-danger'>
                                <i className='fa-solid fa-trash' onClick={() => onClick(data.id)}></i>
                              </div>
                            </div>
                          )
                        })}
                      </div>
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

export default Share