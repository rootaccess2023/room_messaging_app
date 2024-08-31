import PropTypes from 'prop-types';

export function Navlist({ link, name }) {
  return (
    <li className='cursor-pointer'>
        <a href={link} className="py-2 px-3 text-white text-xl font-medium cursor-pointer rounded md:bg-transparent">{name}</a>
    </li>
  )
}


Navlist.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
