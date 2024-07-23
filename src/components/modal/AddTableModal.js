import React from 'react'
import { Formik, Form, Field } from 'formik'
import CustomSelect from '../CustomSelect'

const initialValues = {
  table: '',
}

const validate = values => {
  let errors = {}

  if (!values.table) {
    errors.table = "Required!"
  }
  return errors
}

const tableOptions = [
  { value: "1", label: "table1" },
  { value: "2", label: "table2" },
  { value: "3", label: "table3" },
  { value: "4", label: "table4" },
  { value: "5", label: "table5" },
]

function AddTableModal({ tables, setTables }) {
  const onSubmit = values => {
    setTables([...tables, values.table])
  }

  return (
    <div className='modal fade' id='addTableModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <h4>Select Table</h4>
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={onSubmit}
            >
              {formik => (
                <Form className='form'>
                  <Field
                    name='table'
                    component={CustomSelect}
                    options={tableOptions}
                  />
                  <div className='error'>
                    {formik.errors.table}
                  </div>

                  <div className='text-end mt-3'>
                    {formik.dirty ?
                      <button
                        type='submit'
                        className='btn btn-primary ps-5 pe-5'
                        data-bs-dismiss="modal"
                      >
                        Add
                      </button> :
                      <button
                        type='submit'
                        className='btn btn-primary ps-5 pe-5'
                      >
                        Add
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
  )
}

export default AddTableModal