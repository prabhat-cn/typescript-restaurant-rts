import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { addFoodToCustomer } from '../../redux/reducers/customerSlice';

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard: React.FC<CustomerCardType> = ({ id, name, food }) => {
  const [customerFoodInput, setCustomerFoodInput] = useState('');

  const dispatch = useAppDispatch();

  const addFood = () => {
    dispatch(
      addFoodToCustomer({
        id,
        food: customerFoodInput,
      })
    );
    setCustomerFoodInput('');
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter' || event.key === 'NumpadEnter') {
      event.preventDefault();
      event.stopPropagation();
      addFood();
    }
  };
  return (
    <>
      <div className="customer-food-card-container">
        <h4>{name}</h4>
        <div className="customer-foods-container">
          <div className="customer-food">
            <span>Food Requirement:</span>&nbsp;
            {food.map((food) => {
              return <p className="food-name">{food}</p>;
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={customerFoodInput}
              onKeyDown={onKeyDown}
              onChange={(e) => setCustomerFoodInput(e.target.value)}
              placeholder="Enter food name"
            />
            <button onClick={addFood}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
