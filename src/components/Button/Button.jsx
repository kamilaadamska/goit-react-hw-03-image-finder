import css from './button.module.css';

export const Button = () => {
  return (
    <div className={css.containerBtn}>
      <button type="button" className={css.loadMore}>
        Load more
      </button>
    </div>
  );
};
