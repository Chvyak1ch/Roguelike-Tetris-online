import React from "react";
import "./StyledTableStates.css"

const TableStates = (props) => {
    return(
        <div className="rama">
            <p><strong>Rows: {props.Rows}</strong> </p>
            <p><strong>Level: {props.Level}</strong> </p>
            <p><strong>Score: {props.Score}</strong> </p>
        </div>
    )
}

export default TableStates;