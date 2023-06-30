import css from './searchbar.module.css';
import searchIcon from '../../icons/search.svg';

export const Searchbar = () => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}>
        <button className={css.formBtn} type="submit">
          <img src={searchIcon} alt="search icon" width="15px" />
        </button>
        <input
          className={css.formInput}
          type="text"
          name="searchQuery"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
