import programing1 from '../assets/img/programing1.jpg';
import PropTypes from 'prop-types';

export const Programing1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={programing1} alt="Imagen de programacion"className="image" />
    </div>
  )
}

Programing1.propTypes = {
  className: PropTypes.string
};

