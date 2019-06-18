import React from "react";

const Searcher = ({ value, onChange }) => {
    return (
        <input
            type="text"
            name="query"
            className="form-control my-3"
            palceholder="Search..."
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
};

export default Searcher;