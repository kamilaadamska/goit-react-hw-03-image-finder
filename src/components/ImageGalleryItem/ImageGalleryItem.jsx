import css from './imagegalleryitem.module.css';

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li className={css.photoCard} key={id}>
          <img
            src={webformatURL}
            alt={tags}
            className={css.photo}
            onClick={onClick}
            data-imageurl={largeImageURL}
          />
        </li>
      ))}
    </>
  );
};
