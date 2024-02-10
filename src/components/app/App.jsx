import { Profile } from '../profile/Profile';
import { FriendList } from '../friendlist/FriendList';
import { TransactionHistory } from '../transactionhistory/TransactionHistory';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
