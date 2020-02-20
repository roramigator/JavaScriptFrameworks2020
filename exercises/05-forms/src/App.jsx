import React, { useState } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import countries from './assets/countries.json';
import states from './assets/states.json';

function App() {
  const [formValues, setFormValues] = useState({});
  const [isSubmitted, setSubmit] = useState(false);

  const updateState = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <form className="container mt-4" onSubmit={submitForm}>
      {/* You will need to handle form submission */}
      {console.log(formValues)}
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={formValues.firstName}
          onChange={updateState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={formValues.lastName}
          onChange={updateState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={formValues.addressLine1}
          onChange={updateState}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          value={formValues.city}
          onChange={updateState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}
        <select id="state" name="state" className="form-control" value={formValues.state} onChange={updateState}>
          {
            states.map((state, idx) => {
              return <option key={`state${idx}`} value={state}>{state}</option>
            })
          }
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={formValues.postalCode}
          onChange={updateState}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control" value={formValues.country} onChange={updateState}>
          {
            countries.map((country, idx) => {
              return <option key={`country${idx}`} value={country}>{country}</option>
            })
          }
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {isSubmitted && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
            {
              Object.entries(formValues).map((array, idx) => {
                return <li key={idx}><h3><i>{array[0]}:</i> <strong>{array[1]}</strong></h3></li>
              })
            }
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
