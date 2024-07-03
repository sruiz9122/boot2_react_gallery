import programing4 from '../assets/img/programing4.jpg';
import PropTypes from 'prop-types';

export const Programing4 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={programing4} alt="Imagen de programacion"className="image" />
    </div>
  )
}

Programing4.propTypes = {
  className: PropTypes.string
};

