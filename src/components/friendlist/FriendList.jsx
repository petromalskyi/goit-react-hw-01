import css from './FriendList.module.css';
import { FriendListItem } from '../friendlistItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.item} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};
