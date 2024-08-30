import PropTypes from 'prop-types';

export function Input({ name, type, placeholder, value, onChange }) {
  return (
    <input className="w-full text-medium font-medium border border-neutral-200 border-1 p-3 rounded"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};