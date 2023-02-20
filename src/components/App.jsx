import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import items from '../transactions.json';

export const App = () => {
  return (
    <Layout>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
      <GlobalStyle />
    </Layout>
  );
};
