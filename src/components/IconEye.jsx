import PropTypes from 'prop-types';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function IconEye({onClick, passwordType, passwordConfirmationType, style}) {
  return (
    <FontAwesomeIcon
        className={style}
        icon={passwordType === 'password' ? faEyeSlash : faEye}
        onClick={onClick}
    />
  )
}

IconEye.propTypes = {
  onClick: PropTypes.func.isRequired,
  passwordType: PropTypes.string.isRequired,
  style: PropTypes.string,
};

IconEye.defaultProps = {
  style: '',
};

