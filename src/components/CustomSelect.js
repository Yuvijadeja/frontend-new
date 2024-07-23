import React from 'react'
import Select from 'react-select'

const CustomSelect = ({ options, field, form }) => {
  const onChange = option => {
    form.setFieldValue(field.name, option);
  }

  return (
    <Select
      options={options}
      name={field.name}
      value={field.value}
      onChange={onChange}
      onBlur={field.onBlur}
    />
  );
};

export default CustomSelect
