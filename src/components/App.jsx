import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Component } from 'react';
import { fetchImages, PER_PAGE } from 'services/api';
import { Error } from './Error';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    searchedPhrase: '',
    totalPages: 0,
    show: false,
    imgUrl: '',
    tags: '',
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
      searchForm.reset();
    }
  };

  getImages = async () => {
    const { searchedPhrase, currentPage } = this.state;

    try {
      this.setState({ isLoading: true, error: '' });
      const newData = await fetchImages(searchedPhrase, currentPage);
      const newImages = newData.hits;
      if (newImages) {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          isLoading: false,
          totalPages: Math.ceil(newData.totalHits / PER_PAGE),
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

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchedPhrase, currentPage } = this.state;

    if (
      searchedPhrase !== prevState.searchedPhrase ||
      currentPage !== prevState.currentPage
    ) {
      this.getImages();
    }
  }

  toggleModal = e => {
    const url = e.target.dataset.imageurl;
    const tagsForalt = e.target.alt;
    this.setState(prevState => ({
      show: !prevState.show,
      imgUrl: url,
      tags: tagsForalt,
    }));
  };

  render() {
    const {
      images,
      isLoading,
      error,
      currentPage,
      totalPages,
      show,
      imgUrl,
      tags,
    } = this.state;

    return (
      <>
        <Searchbar findImages={this.getSearchedPhrase} />
        <ImageGallery
          images={images}
          onClick={this.toggleModal}
          showModal={show}
          imgUrl={imgUrl}
          tags={tags}
        />
        {isLoading && <Loader />}
        {error && <Error />}
        {currentPage < totalPages && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

export default App;
