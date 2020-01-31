import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

// import user from './components/profile-homework/user.json';
// import Profile from "./components/profile-homework/Profile";
// import statisticalData from "./components/statistics-homework/statistical-data.json";
// import Statistics from "./components/statistics-homework/Statistics";
// import transactions from './components/transactions-homework/transactions.json';
// import TransactionHistory from "./components/transactions-homework/Transactions";
// import friends from './components/friendsList/friends.json';
// import FriendList from "./components/friendsList/FriendsList";

// ReactDOM.render(<Profile user={user} />, document.getElementById('root'));

// ReactDOM.render(
//   <Statistics title="Upload stats" stats={statisticalData} />,
//   document.getElementById('root'),
// );

// ReactDOM.render(
//   <TransactionHistory items={transactions} />,
//   document.getElementById('root'),
// );



// ReactDOM.render(
//   <FriendList friends={friends} />,
//   document.getElementById('root'),
// );


ReactDOM.render(
  <App />, document.getElementById('root'),
);
