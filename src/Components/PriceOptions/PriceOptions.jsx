import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {

    const priceOptions =  [
        {
          "id": "plan_basic_001",
          "name": "Basic Plan",
          "price_per_month": 1200,
          "features": [
            "Access to gym equipment",
            "Locker facility",
            "Free Wi-Fi",
            "Flexible check-in times",
            "Air-conditioned workout zone",
            "Basic fitness assessment once a year"
          ]
        },
        {
          "id": "plan_standard_002",
          "name": "Standard Plan",
          "price_per_month": 1800,
          "features": [
            "Everything in Basic Plan",
            "Access to group fitness classes (Yoga, Zumba, HIIT)",
            "One personal training session per month",
            "Body composition analysis every 3 months",
            "Access to stretching and recovery area",
            "Shower and changing room access"
          ]
        },
        {
          "id": "plan_premium_003",
          "name": "Premium Plan",
          "price_per_month": 2500,
          "features": [
            "Everything in Standard Plan",
            "Unlimited personal training sessions",
            "Weekly progress tracking and goal setting",
            "Steam bath and sauna access",
            "Nutrition and diet consultation",
            "Dedicated locker with name tag",
            "Access to premium lounge with refreshments"
          ]
        },
        {
          "id": "plan_annual_004",
          "name": "Annual Membership",
          "price_per_year": 22000,
          "features": [
            "Everything in Premium Plan",
            "One free gym kit (T-shirt, shaker, towel)",
            "Priority booking for classes and personal trainers",
            "Two guest passes per month",
            "Exclusive workshops and fitness events",
            "Birthday surprise from the gym",
            "Free monthly massage session"
          ]
        }
      ]
      

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className="text-5xl text-center py-8">Best price option in town</h2>
            <div className='grid md:grid-cols-2  gap-4 items-center mb-8'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
            
        </div>
    );
};

export default PriceOptions;