import { Profile } from './profile/Profile';
import { FriendList } from './friendlist/FriendList';
import userData from '../userData.json';

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
