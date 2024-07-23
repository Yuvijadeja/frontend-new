import React from 'react'
import Select from 'react-select'

const CustomSelectMulti = ({ options, field, form }) => {
  const onChange = option => {
    form.setFieldValue(field.name, option);
  }

  return (
    <Select
      isMulti
      options={options}
      name={field.name}
      value={field.value}
      onChange={onChange}
      onBlur={field.onBlur}
    />
  );
};

export default CustomSelectMulti
