import css from './imagegalleryitem.module.css';

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags }) => (
        <li className={css.photoCard} key={id}>
          <img src={webformatURL} alt={tags} className={css.photo} />
        </li>
      ))}
    </>
  );
};
