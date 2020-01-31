import React from "react";
import Profile from "./profile-homework/Profile";
import user from "./profile-homework/user.json";
import statisticalData from "./components/statistics-homework/statistical-data.json";
import Statistics from "./components/statistics-homework/Statistics";

const App = () => {
    return (
        <>
    <Statistics statistic={statisticalData}/>
    <TransactionHistory />
    </>
)
    }

export default App;


































// import Numbers from "./numbers/Numbers";

// const array = [1, 2, 3, 4, 5];
// const App = () => {
//   console.log("heyyy");
//   return (
//     <>
//       <ul>
//         {array.map((item, index) => (
//           <Numbers key={index} item={item} index={index} array={array} />
//         ))}
//       </ul>
//       <div>Hello World</div>
//     </>
//   );
// };


