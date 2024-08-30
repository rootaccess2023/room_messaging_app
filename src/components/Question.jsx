import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export function Question({style, question, answer, link}) {
  return (
    <Link to={link}>
    <h1 className={style} >{question} <span className="text-orange-500">{answer}</span></h1>
    </Link>
  )
}

Question.propTypes = {
    style: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}