import css from './imagegallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {images.length !== 0 && (
          <ImageGalleryItem images={images} onClick={onClick} />
        )}
      </ul>
    </div>
  );
};
