import css from './FriendList.module.css';
import friends from '../../friends.json';

// console.log(friends);
// console.log(friends.length);

export const FriendList = () => {
  return (
    <ul className={css.list}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map(friend => {
        // <li>5555555555555</li>;
        return (
          <li className={css.item} key={friend.id}>
            <img
              className={css.img}
              src={friend.avatar}
              alt="User avatar"
              width="16"
            />
            <p className={css.name}>{friend.name}</p>
            {friend.isOnline ? (
              <p className={css.statusGreen}>Online</p>
            ) : (
              <p className={css.statusRed}>Offline</p>
            )}
          </li>
        );
      })}
    </ul>
  );
};
