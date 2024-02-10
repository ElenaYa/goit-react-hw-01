import css  from './TransactionHistory.module.css'
export const TransactionHistory = ({
    items }) => {

    return (
        <>
            <table className={css.tableWrap}>
                <thead>
                    <tr>
                        <th className={css.headTable}>Type</th>
                        <th className={css.headTable}>Amount</th>
                        <th className={css.headTable}>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    )
                    )}
  
                </tbody>
            </table>
        </>
    );
}