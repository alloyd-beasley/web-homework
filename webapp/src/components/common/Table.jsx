import React from 'react'

const Table = (props) => {
    const { headers, data } = props;
    return (
        <table>
            <tbody>
                <tr>
                    {headers.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
                {data.map((d, i) => {
                    return (
                        <tr key={i}>
                            {headers.map(h => <td>{d[h]}</td>)}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;