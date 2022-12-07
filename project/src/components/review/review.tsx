import dayjs from 'dayjs';
import { Review } from '../../types/data';

type ReviewComponentProps = {
  review: Review;
}

function ReviewComponent({review}: ReviewComponentProps): JSX.Element {
  const {
    avatar,
    name,
    rating,
    date,
    reviewText
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{
                width: `${rating / 5 * 100}%`
              }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>{dayjs(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default ReviewComponent;
