import css from './searchbar.module.css';
import searchIcon from '../../icons/search.svg';

export const Searchbar = () => {
  return (
    <div className={css.containerHeader}>
      <form className={css.searchForm}>
        <button className={css.formBtn} type="submit">
          <img src={searchIcon} alt="search icon" width="15px" />
        </button>
        <input
          className={css.formInput}
          type="text"
          name="searchQuery"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};
