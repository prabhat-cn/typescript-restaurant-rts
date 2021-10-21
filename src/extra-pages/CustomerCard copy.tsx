import React, { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addFoodToCustomer } from '../redux/reducers/customerSlice';

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
  return (
    <>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((food) => {
              return <p>{food}</p>;
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={customerFoodInput}
              onChange={(e) => setCustomerFoodInput(e.target.value)}
            />
            <button
              onClick={addFood}
              // onClick={() => {
              //   dispatch(
              //     addFoodToCustomer({
              //       id,
              //       food: customerFoodInput,
              //     })
              //   );
              // }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCard;
