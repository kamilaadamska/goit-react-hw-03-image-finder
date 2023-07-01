import css from './imagegallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Modal } from 'components/Modal';

export const ImageGallery = ({ images, onClick, showModal, imgUrl, tags }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {images.length !== 0 && (
          <ImageGalleryItem images={images} onClick={onClick} />
        )}
      </ul>
      <Modal imgUrl={imgUrl} showModal={showModal} tagsForAlt={tags} />
    </div>
  );
};
