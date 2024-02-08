import './Profile.css';

export const Profile = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div>
        <img className="img" src={avatar} alt="User avatar" />
        <p className="name">{name}</p>
        <p className="text">@{tag}</p>
        <p className="text">{location}</p>
      </div>

      <ul className="list">
        <li className="item">
          <span className="span-first">Followers</span>
          <span className="span-second">{followers}</span>
        </li>
        <li className="item">
          <span className="span-first">Views</span>
          <span className="span-second">{views}</span>
        </li>
        <li className="item">
          <span className="span-first">Likes</span>
          <span className="span-second">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
