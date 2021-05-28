import React, { useContext, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TmdbContext from '../../../context/tmdb/tmdbContext';
import './Modal.css';

const Modal = ({ item }) => {
  const tmdbContext = useContext(TmdbContext);
  const { clearModal, addToFavorits, removeFromFavorits } = tmdbContext;
  const {
    genres,
    release_date,
    last_air_date,
    next_episode_to_air,
    vote_average,
    overview,
    status,
  } = item;

  let summary = overview.substring(0, 485);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleAdd = () => {
    addToFavorits(item);
    setOpen(true);
    setMessage(
      `${item.original_title || item.original_name} has been added to your list`
    );
  };
  const handleRemove = () => {
    removeFromFavorits(item);
    setOpen(true);
    setMessage(
      `The ${
        item.original_title || item.original_name
      } has been delete from your list`
    );
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='modal'>
      <div className='modal_frame'>
        <div className='split'>
          <div className='modal_image'>
            <img
              src={
                `https://image.tmdb.org/t/p/w342/${item.poster_path}` ||
                'https://via.placeholder.com/150'
              }
              alt='No poster'
            />
          </div>
          <div className='modal_details'>
            <div className='modal__title'>
              <h1>{item.title || item.name}</h1>
            </div>
            <div className='modal__genres'>
              <p>
                <i className='fas fa-star'></i>
                {vote_average}
              </p>
              {genres.map((g) => (
                <p key={g.id}>{g.name}</p>
              ))}
            </div>
            {item.media_type === 'tv' ? (
              <div className='modal__genres'>
                <p>{`Last: ${last_air_date}`}</p>

                <p>{`Next: ${
                  (next_episode_to_air && next_episode_to_air['air_date']) ||
                  next_episode_to_air ||
                  'Unknown'
                }`}</p>
                <p>{`Status: ${status}`}</p>
              </div>
            ) : (
              <div className='modal__genres'>
                <p>{`Release: ${release_date}`}</p>
                <p>{`Status: ${status}`}</p>
              </div>
            )}
            <div className='modal__summary'>
              <p className='modal__summary__title'>Plot Summary:</p>
              <p className='modal__summary__text'>{`${summary}`}</p>
            </div>
            <div className='modal__buttons'>
              {item.isFavorit ? (
                <FavoriteIcon fontSize='large' onClick={handleRemove} />
              ) : (
                <FavoriteBorderIcon fontSize='large' onClick={handleAdd} />
              )}

              <div className='outer'>
                <div className='inner'>
                  <label onClick={clearModal}>Back</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
};

export default Modal;
