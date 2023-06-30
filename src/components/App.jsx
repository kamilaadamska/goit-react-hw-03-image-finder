import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Loader } from './Loader';

export const App = () => {
  return (
    <>
      <Searchbar />
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Loader />
      <Button />
    </>
  );
};
