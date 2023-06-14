import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

export const Notification = ({ message }) => (
  <div className={css.notification__text}>
    <p>{message}</p>
  </div>
);
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
