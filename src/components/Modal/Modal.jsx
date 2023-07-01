import css from './modal.module.css';

export const Modal = ({ imgUrl, tagsForAlt, hideModal, onKeyDown }) => {
  return (
    <div className={css.overlay} onClick={hideModal}>
      <div className={css.modal} tabIndex={1} onKeyDown={onKeyDown} id="modal">
        <img src={imgUrl} alt={tagsForAlt} className={css.modalImg} />
      </div>
    </div>
  );
};
