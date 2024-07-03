import programing5 from '../assets/img/programing5.jpg';
import PropTypes from 'prop-types';

export const Programing5 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={programing5} alt="Imagen de programacion"className="image" />
    </div>
  )
}

Programing5.propTypes = {
  className: PropTypes.string
};
