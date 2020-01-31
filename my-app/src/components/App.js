import React from "react";
import user from './profile-homework/user.json';
import Profile from "./profile-homework/Profile";
import statisticalData from "./statistics-homework/statistical-data.json";
import Statistics from "./statistics-homework/Statistics";
import transactions from './transactions-homework/transactions.json';
import TransactionHistory from "./transactions-homework/Transactions";
import friends from './friendsList/friends.json';
import FriendList from "./friendsList/FriendsList";

const App = () => {
    return (
        <>
        <Profile user={user} />
    <Statistics stats={statisticalData}/>
    <TransactionHistory items={transactions} />
    <FriendList friends={friends} />
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


