import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
       const priceOptions = [
          {
            "id": 1,
            "name": "Basic Plan",
            "price": 20.00,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Free parking"
            ]
          },
          {
            "id": 2,
            "name": "Standard Plan",
            "price": 35.00,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Free parking",
              "Group fitness classes",
              "1 personal training session per month"
            ]
          },
          {
            "id": 3,
            "name": "Premium Plan",
            "price": 50.00,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Free parking",
              "Group fitness classes",
              "4 personal training sessions per month",
              "Access to spa and sauna",
              "Priority class booking"
            ]
          },
          
        ]
      
      
    return (
        <div className="m-12">
            <h2 className="text-5xl font-bold">Best Prices in the town</h2>
           <div className="grid grid-cols-3 gap-6">
           {
                priceOptions.map(option => <PriceOption option ={option} key={option.id}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;