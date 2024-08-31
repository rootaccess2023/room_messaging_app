import PropTypes from 'prop-types';

export function Navlist({ onClick, name }) {
  return (
    <li
      onClick={onClick}
      className="py-2 px-3 text-white text-xl font-medium cursor-pointer rounded md:bg-transparent"
    >
        {name}
    </li>
  )
}


Navlist.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string
}
