import React from 'react';
import { AiOutlineDelete, AiOutlinePlusSquare } from 'react-icons/ai';
import { useAppDispatch } from '../../redux/hooks';
import { removeReservation } from '../../redux/reducers/reservationSlice';
// import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';
import { addCustomer } from '../../redux/reducers/customerSlice';
interface ReservationCardType {
  name: string;
  index: number;
}

// export default function ReservationCard({name}: ReservationCardType) {

// }

const ReservationCard: React.FC<ReservationCardType> = ({
  name,
  // food,
  index,
}: ReservationCardType) => {
  const dispatch = useAppDispatch();

  const addRegistrationClick = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name,
        food: [],
      })
    );
  };
  const removeClick = () => {
    dispatch(removeReservation(index));
  };
  return (
    <>
      <div className="reservation-card-container">
        {name} &nbsp;&nbsp;
        <span onClick={removeClick}>
          <AiOutlineDelete />
        </span>
        <span onClick={addRegistrationClick}>
          <AiOutlinePlusSquare />
        </span>
      </div>
    </>
  );
};

export default ReservationCard;
