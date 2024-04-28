import { Fragment, useState } from 'react';

const UserRating = ({
  id,
  currentRating,
  updateUserRating,
}:{
  id: number,
  currentRating: number;
  updateUserRating: (id: number, newRating: number) => void;
}) => {
  const [rating, setRating] = useState(currentRating);

  const onClickHandler = (index: number) => {
    const newRating = index + 1;
    setRating(newRating);
    updateUserRating(id, newRating);
  };

  return (
    <Fragment>
      {[...Array(5)].map((_, index) => (
        <span
          key={"as24db5ef"+index}
          className="star"
          onClick={() => onClickHandler(index)}
          style={{ color: index < rating ? 'gold' : '', cursor: 'pointer' }}
        >
          ★
        </span>
      ))}
    </Fragment>
  );
};

export default UserRating;
