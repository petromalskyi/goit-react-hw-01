import { Profile } from './profile/Profile';
import userData from '../userData.json';

export function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        // image="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
        stats={userData.stats}
      />
    </>
  );
}
