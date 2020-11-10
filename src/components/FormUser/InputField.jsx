import classNames from 'classnames';
import React from 'react';

const InputField = props => {
    const { field, form, type, placeholder } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <div className="form_group">
            <input className={classNames('form_control', { 'is-invalid': showError })}
                {...field}
                type={type}
                placeholder={placeholder}
            />
            {
                showError && <div className="form_message">{errors[name]}</div>
            }
        </div>
    );
};



export default InputField;