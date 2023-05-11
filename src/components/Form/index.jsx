import React from 'react';
import Button from '../Button';
import './styles.scss';

const Form = ({ inputs, submitHandler, changeHandler, isLoading }) => {
  return (
    <form onSubmit={submitHandler}>
      {inputs.map((input) => (
        <div className="form-input" key={input.name}>
          <label>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            onChange={changeHandler}
          />
        </div>
      ))}
      <Button isLoading={isLoading} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
