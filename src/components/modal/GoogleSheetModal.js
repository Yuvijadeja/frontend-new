import React, { useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import FileUpload from './FileUpload.js'
import PopOver from '../PopOver.js'
import Error from '../Error.js'
import { regexAlphaNumeric } from '../../Regex.js'

const initialValues = {
  key: '',
  sheet: '',
  alias: ''
}

const validate = values => {
  let errors = {}

  if (!values.key) {
    errors.key = "Required!"
  }

  if (!values.sheet) {
    errors.sheet = "Required!"
  } else if (!values.sheet.match(regexAlphaNumeric)) {
    errors.sheet = "Invalid Sheet name!"
  }

  if (!values.alias) {
    errors.alias = "Required!"
  } else if (!values.alias.match(regexAlphaNumeric)) {
    errors.alias = "Invalid Alias!"
  }

  return errors
}

function GoogleSheetModal({ setAlert, setShowAlert }) {
  const fileRef = useRef(null)

  const onSubmit = values => {
    setAlert({
      type: "success",
      message: "Database added Successfully...",
    })
    setShowAlert(true)
    console.log(values)
  }

  return (
    <div className="modal fade" id="googleSheetModal">
      <div className="modal-dialog ">
        <div className="modal-content">

          <div className="modal-header">
            <div className='background'></div>
            <div className='content'>
              <h5 className="modal-title">
                <i className='fa-solid fa-circle-plus'></i>&nbsp; Google Sheet
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
                      <div className='col-12 mb-3'>
                        <FileUpload name="key" fileRef={fileRef} />
                      </div>

                      <div className='col-6 mb-3'>
                        <label htmlFor='sheet' className='mb-2'>
                          Sheet &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            Google Sheet Name
                          </PopOver>
                        </label>
                        <Field type='text' id='sheet' className="form-control" name='sheet' />
                        <ErrorMessage name='sheet' component={Error} />
                      </div>

                      <div className='col-6 mb-3'>
                        <label htmlFor='alias' className='mb-2'>
                          Alias &nbsp;
                          <PopOver placement="right" icon="fa-regular fa-circle-question">
                            Alias for Google Sheet
                          </PopOver>
                        </label>
                        <Field type='text' id='alias' className="form-control" name='alias' />
                        <ErrorMessage name='alias' component={Error} />
                      </div>
                    </div>

                    <div className='pt-3 pb-3'>
                      {formik.dirty ?
                        <button
                          type='submit'
                          className='btn btn-outline-primary'
                          data-bs-dismiss="modal"
                        >
                          Add Database
                        </button> :
                        <button
                          type='submit'
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

export default GoogleSheetModal