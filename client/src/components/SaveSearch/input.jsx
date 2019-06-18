//jsx is like js only jsx is better for react and can make the components easier to use
import React from "react";
// ...rest operator includes any properties other than 'name', 'label', and 'error'
const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} id={name} className="form-control" />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default Input;