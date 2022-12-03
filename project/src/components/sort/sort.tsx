import { SortType } from '../../const';

type SortOptionsProps = {
  sortType: string;
  changeSortHandle: (evt: React.MouseEvent<HTMLUListElement>) => void;
}

function SortOptions({sortType, changeSortHandle}: SortOptionsProps): JSX.Element {
  return (
    <form className="places__sorting" action="/" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="/icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened" onClick={changeSortHandle}>
        {Object.entries(SortType).map(([key, value]) => (
          <li key={key} className={`places__option ${sortType === value ? 'places__option--active' : ''}`} tabIndex={0}>{value}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortOptions;
