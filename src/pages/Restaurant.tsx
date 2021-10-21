import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import ReservationCard from './cards/ReservationCard';
import CustomerCard from './cards/CustomerCard';
import { addReservation } from '../redux/reducers/reservationSlice';
import { RootState } from '../redux/store';
import './styles.css';

// e: React.MouseEvent<HTMLElement, MouseEvent>): void

const Restaurant: React.FC = () => {
  const dispatch = useAppDispatch();
  const [reservationNameInput, setReservationNameInput] = useState<string>('');
  // const reservation = useSelector((state: RootState) => state.reservations.value);

  const reservation = useAppSelector((state) => state.reservations.value);

  const customers = useAppSelector((state) => state.customers.value);

  const handleAddReservation = () => {
    if (!reservationNameInput) {
      return;
    }
    dispatch(addReservation(reservationNameInput));
    // after add then field empty
    setReservationNameInput('');
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      event.preventDefault();
      event.stopPropagation();
      handleAddReservation();
    }
  };
  return (
    <>
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservation.map((name, index) => (
                <ReservationCard name={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            {/* Reservation entry person */}
            <input
              type="input"
              placeholder="Type name here.."
              value={reservationNameInput}
              onKeyDown={onKeyDown}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservation}>Enter Name</button>

            {/* reservation end */}
          </div>
        </div>
        <div className="customer-food-container">
          <h3 className="listed-com">Listed Customers</h3>
          {customers.map((customer) => (
            // data coming from reducer type data
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
              key={customer.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
