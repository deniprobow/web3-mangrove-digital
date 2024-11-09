// components/TextInput.tsx
import React from 'react';

interface TextInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, value, onChange, placeholder, type = 'text' }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default TextInput;
