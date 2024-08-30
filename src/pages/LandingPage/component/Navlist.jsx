import PropTypes from 'prop-types';

export function Navlist({ link, name }) {
  return (
    <li className=''>
        <a href={link} className="block py-2 px-3 text-white text-xl rounded md:bg-transparent" aria-current="page">{name}</a>
    </li>
  )
}


Navlist.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
