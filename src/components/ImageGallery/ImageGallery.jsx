import css from './imagegallery.module.css';

export const ImageGallery = ({ children }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>{children}</ul>
    </div>
  );
};
