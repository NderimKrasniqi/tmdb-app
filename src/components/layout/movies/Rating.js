import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';

const Rating = ({ value, color }) => {
  return (
    <div className='rating'>
      <span>
        <i
          style={{ color }}
          className={
            value >= 1 ? (
              <StarIcon />
            ) : value >= 0.5 ? (
              <StarHalfIcon />
            ) : (
              <StarBorderIcon />
            )
          }
        />
        <i
          style={{ color }}
          className={
            value >= 2 ? (
              <StarIcon />
            ) : value >= 1.5 ? (
              <StarHalfIcon />
            ) : (
              <StarBorderIcon />
            )
          }
        />
        <i
          style={{ color }}
          className={
            value >= 3 ? (
              <StarIcon />
            ) : value >= 2.5 ? (
              <StarHalfIcon />
            ) : (
              <StarBorderIcon />
            )
          }
        />
        <i
          style={{ color }}
          className={
            value >= 4 ? (
              <StarIcon />
            ) : value >= 3.5 ? (
              <StarHalfIcon />
            ) : (
              <StarBorderIcon />
            )
          }
        />
        <i
          style={{ color }}
          className={
            value >= 5 ? (
              <StarIcon />
            ) : value >= 4.5 ? (
              <StarHalfIcon />
            ) : (
              <StarBorderIcon />
            )
          }
        />
      </span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#ff9529',
  value: 0,
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};
export default Rating;
