import css from './FriendList.module.css';

export const FriendList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(frend => {
        return (
          <li className={css.item} key={frend.id}>
            <img
              className={css.img}
              src={frend.avatar}
              alt="User avatar"
              width="16"
            />
            <p className={css.name}>{frend.name}</p>
            {frend.isOnline ? (
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
