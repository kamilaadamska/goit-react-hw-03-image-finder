import css from './modal.module.css';

export const Modal = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img
          src="https://zoonews.pl/wp-content/uploads/2023/02/male-pieski-ktore-nie-rosna.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
