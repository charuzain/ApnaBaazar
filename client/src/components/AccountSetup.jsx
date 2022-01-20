import React, { useState } from 'react';

export default function AccountSetup(props) {
  const [firstName, setFirstName] = useState(props.firstName || "");
  const [lastName, setLastName] = useState(props.lastName || "");
  const [error, setError] = useState("");

  function validate() {
    if (firstName) {
      setError("");
    } else {
      setError("Student name cannot be blank");
      return;
    }

    props.onSave(firstName, lastName);
  }

 return (
      <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <form onSubmit={(event) => event.preventDefault()} class="mt-5 border p-4 bg-light shadow">
                    <h4 class="mb-5 text-secondary">Create Your Account</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label>First Name<span class="text-danger">*</span></label>
                            <input id="firstName" type="text" name="fname" class="form-control" placeholder="Enter First Name" value={firstName} onChange={ (event) => setFirstName(event.target.value)}/>
                        </div>

                        <div class="mb-3 col-md-6">
                            <label>Last Name<span class="text-danger">*</span></label>
                            <input id="lastName" type="text" name="lname" class="form-control" placeholder="Enter Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                        </div>
                        <div class="col-md-12">
                           <button class="btn btn-primary float-end" onClick={validate}>Signup</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
};