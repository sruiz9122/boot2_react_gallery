import programing6 from '../assets/img/programing6.jpg';
import PropTypes from 'prop-types';

export const Programing6 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={programing6} alt="Imagen de programacion"className="image" />
    </div>
  )
}

Programing6.propTypes = {
  className: PropTypes.string
};
