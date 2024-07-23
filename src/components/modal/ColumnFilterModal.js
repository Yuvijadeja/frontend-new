import React, { useState, useReducer } from 'react'
import Select from 'react-select'

const initialState = {
  less: "",
  greater: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'Greater':
      return { ...state, greater: action.value }
    case 'Less':
      return { ...state, less: action.value }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function ColumnFilterModal({ column, filters, setFilters, setAlert, setShowAlert }) {
  const [data, dispatch] = useReducer(reducer, initialState)

  const [options, setOptions] = useState([
    { value: "male", label: "Male" },
    { value: "female", label: "Female" }
  ])
  const [selectedOption, setSelectedOption] = useState([])

  const handleSelect = e => {
    setSelectedOption(e)
  }

  const handleClick = () => {
    if (column.type == "text") {
      if (selectedOption.length < 1) {
        setAlert({
          type: 'warning',
          message: "Atleast one value should be selected!"
        })
        setShowAlert(true)
      } else {
        let filter = selectedOption.map(option => option.value)
        setFilters({ ...filters, [column.name]: filter })
      }
    } else {
      if (data.less == "" || data.greater == "") {
        setAlert({
          type: 'warning',
          message: "Please select a value for both less than and greater than!"
        })
        setShowAlert(true)
      } else {
        if (parseFloat(data.less) > parseFloat(data.greater)) {
          setAlert({
            type: 'warning',
            message: `Values mismatch ${data.less} is greater than ${data.greater}!`
          })
          setShowAlert(true)
        } else {
          let key = column.name + "/number"
          setFilters({ ...filters, [key]: [data.less, data.greater] })
        }
      }
    }
  }

  return (
    <div className='modal fade' id='columnFilterModal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body'>
            <h5>Filter {column.name}</h5>

            <div className='row'>
              {column.type == "text" &&
                <div className='col-12 mb-3'>
                  <Select
                    isMulti
                    defaultValue={selectedOption}
                    name={column.name}
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={e => handleSelect(e)}
                  />
                </div>
              }

              {column.type == "number" &&
                <>
                  <div className='col-6 mb-3'>
                    <input
                      type='number'
                      name='less'
                      placeholder='Less Than'
                      id='less'
                      className='form-control'
                      value={data.less}
                      onChange={e => dispatch({ type: 'Less', value: e.target.value })}
                    />
                  </div>

                  <div className='col-6 mb-3'>
                    <input
                      type='number'
                      name='greater'
                      placeholder='Greater Than'
                      id='greater'
                      className='form-control'
                      value={data.greater}
                      onChange={e => dispatch({ type: 'Greater', value: e.target.value })}
                    />
                  </div>
                </>
              }

              {column.type == "date" &&
                <div className='col-12 mb-3'>
                  <b>Sorry!</b> Currently we don't support <b>Date</b> Data Type
                </div>
              }

              <div className='col-12 text-end'>
                <button
                  type='button'
                  className='btn btn-primary'
                  data-bs-dismiss="modal"
                  disabled={column.type == "date" && "disabled"}
                  onClick={handleClick}
                >
                  Save Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColumnFilterModal