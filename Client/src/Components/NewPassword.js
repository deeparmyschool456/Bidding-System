import React from 'react';

const NewPassport = () => {

    return <form className="card p-4">
  <div class="form-group">
    <label for="newpass">New Password</label>
    <input type="password" class="form-control" id="newpass" aria-describedby="emailHelp" />
  </div>
  <div class="form-group">
    <label for="repass">Re Enter Password</label>
    <input type="password" class="form-control" id="repass" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
};

export default NewPassport;