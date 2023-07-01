import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Component } from 'react';
import { getImages } from 'services/api';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    searchedPhrase: '',
  };

  getSearchedPhrase = e => {
    e.preventDefault();
    const searchForm = e.target;
    const searchedWord = searchForm.elements.searchQuery.value;
    if (searchedWord !== this.state.searchedPhrase) {
      this.setState({
        searchedPhrase: searchedWord,
        currentPage: 1,
        images: [],
      });
    }
  };

  fetchImages = async () => {
    const { searchedPhrase, currentPage } = this.state;

    try {
      this.setState({ isLoading: true, error: '' });
      const newImages = await getImages(searchedPhrase, currentPage);
      if (newImages) {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          isLoading: false,
        }));
      } else {
        throw new Error();
      }
    } catch (error) {
      this.setState({
        error,
        isLoading: false,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchedPhrase, currentPage } = this.state;

    if (
      searchedPhrase !== prevState.searchedPhrase ||
      currentPage !== prevState.currentPage
    ) {
      this.fetchImages();
    }
  }

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <>
        <Searchbar findImages={this.getSearchedPhrase} />
        <ImageGallery>
          {images.length !== 0 && <ImageGalleryItem images={images} />}
        </ImageGallery>
        {isLoading && <Loader />}
        {error && <p>Something went wrong...</p>}
        <Button />
      </>
    );
  }
}

export default App;
