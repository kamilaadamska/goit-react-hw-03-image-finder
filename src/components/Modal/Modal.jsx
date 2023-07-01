import css from './modal.module.css';

export const Modal = ({ imgUrl, tagsForAlt }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={imgUrl} alt={tagsForAlt} className={css.modalImg} />
      </div>
    </div>
  );
};
