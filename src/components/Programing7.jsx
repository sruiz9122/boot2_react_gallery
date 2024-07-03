import programing7 from '../assets/img/programing7.jpg';
import PropTypes from 'prop-types';

export const Programing7 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={programing7} alt="Imagen de programacion"className="image" />
    </div>
  )
}

Programing7.propTypes = {
  className: PropTypes.string
};