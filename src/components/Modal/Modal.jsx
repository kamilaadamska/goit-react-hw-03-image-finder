import css from './modal.module.css';

export const Modal = ({ imgUrl, tagsForAlt, showModal }) => {
  return (
    <div className={showModal ? css.overlay : css.isHidden}>
      <div className={css.modal}>
        <img src={imgUrl} alt={tagsForAlt} className={css.modalImg} />
      </div>
    </div>
  );
};
