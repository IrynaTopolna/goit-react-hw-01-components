import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import items from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
