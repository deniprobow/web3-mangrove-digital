// components/SelectInput.tsx
import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

const SelectInput: React.FC<SelectInputProps> = ({ id, label, value, onChange, options }) => {
  return (
    <div className="form-floating mb-3">
      <select
        className="form-select"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Pilih {label.toLowerCase()}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default SelectInput;
