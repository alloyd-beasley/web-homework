import React from 'react'
import PropTypes from 'prop-types';
import {
    TableHeaderRow,
    TableWrapper,
    TableHeaderCell,
    TableDataCell,
    TableDataRow,
    TableBody,
    TableHeaderWrapper,
} from "./TableStyles"

import { buttonStyle } from "../../../styles/AppStyles"

const Table = (props) => {
    const { headers, data } = props;

    return (
        <TableWrapper>
            <TableHeaderWrapper>
                <TableHeaderRow>
                    {headers.map((h, i) => <TableHeaderCell key={`header-cell-${i}`}>{h}</TableHeaderCell>)}
                </TableHeaderRow>
            </TableHeaderWrapper>
            <TableBody align="left">
                {data.map((d, i) => {
                    return (
                        <TableDataRow key={`data-row-${i}`}>
                            {headers.map(h => <TableDataCell key={`${h}-cell-${i}`}>{d[h]}</TableDataCell>)}
                        </TableDataRow>
                    );
                })}
            </TableBody>
        </TableWrapper>
    );
}

Table.propTypes = {
    headers: PropTypes.array,
    data: PropTypes.array,
}

export default Table;