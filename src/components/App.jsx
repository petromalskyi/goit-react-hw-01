import { Profile } from './Profile/Profile';
import { FriendList } from './friendList/FriendList';
import userData from '../userData.json';
// import friends from '../friends.json';

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
      <FriendList />
    </>
  );
}
