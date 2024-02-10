import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => {
          return (
            <tr key={id} className={css.tr}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>

              {/* <td className={css.td}>{amount}</td>
                <td className={css.td}>{currency}</td> */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
