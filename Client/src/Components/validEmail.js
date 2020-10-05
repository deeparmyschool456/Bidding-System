import React from 'react';

const ValidEmail = () => {

    return <form className="card p-4 ">
    <div className="form-group">
      <label for="exampleInputEmail1"> Valid Email address </label>
      <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    
    <button type="submit" className="btn btn-primary">Next</button>
  </form>
};

export default ValidEmail;