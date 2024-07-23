import React from 'react'
import { useField } from 'formik'
import PopOver from '../PopOver'

function FileUpload({ fileRef, ...props }) {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor='sheet' className='mb-2'>
        Key &nbsp;
        <PopOver placement="right" icon="fa-regular fa-circle-question">
          Google Sheet Key
        </PopOver>
      </label><br />
      <input ref={fileRef} multiple={false} accept="application/JSON" type="file" {...field} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default FileUpload