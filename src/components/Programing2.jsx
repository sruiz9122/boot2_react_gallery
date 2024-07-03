import programing2 from '../assets/img/programing2.jpg';
import PropTypes from 'prop-types';

export const Programing2 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={programing2} alt="Imagen de programacion"className="image" />
    </div>
  )
}

Programing2.propTypes = {
  className: PropTypes.string
};

