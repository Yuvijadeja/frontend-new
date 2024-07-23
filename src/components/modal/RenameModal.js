import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { regexAlphaNumeric } from '../../Regex.js'

const validate = values => {
  let errors = {}

  if (!values.name) {
    errors.name = "Required!"
  } else if (!values.name.match(regexAlphaNumeric)) {
    errors.name = "Invalid Name!"
  }

  return errors
}


function RenameModal({ workbook, setAlert, setShowAlert }) {
  const [initialValues, setInitialValues] = useState({ id: "", name: "" })

  useEffect(() => {
    setInitialValues(workbook)
  }, [workbook])

  const onSubmit = values => {
    setAlert({
      type: "success",
      message: "Rename successfully...",
    })
    setShowAlert(true)
    console.log(values)
  }

  return (
    <div className='modal fade' id='renameModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <h4>Rename</h4>
            <p>Enter a new name for workbook</p>

            <div className='row'>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
              >
                {formik => (
                  <Form className='form'>
                    <div className='col-12 mb-3'>
                      <Field type='text' id='name' className="form-control" name='name' />
                      <div className='error'>
                        {formik.errors.name ? formik.errors.name : null}
                      </div>
                    </div>

                    <div className='col-12 text-end mt-3'>
                      {formik.dirty ?
                        <button
                          type='submit'
                          className='btn btn-primary ps-5 pe-5'
                        >
                          Rename
                        </button> :
                        <button
                          type='submit'
                          className='btn btn-primary ps-5 pe-5'
                          data-bs-dismiss="modal"
                        >
                          Rename
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
    </div >
  )
}

export default RenameModal