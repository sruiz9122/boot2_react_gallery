import programing3 from '../assets/img/programing3.jpg';
import PropTypes from 'prop-types';

export const Programing3 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={programing3} alt="Imagen de programacion"className="image" />
    </div>
  )
}

Programing3.propTypes = {
  className: PropTypes.string
};

