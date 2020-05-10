import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
class formXbox360 extends Component {
    render() {
        return (
            <div>
                <div class="card mt-4">
                    <div class="card-header">
                        Featured
  </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
                                  
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <Link className="btn btn-primary mt-2" to="/xbox36" role="button">Regresar</Link>
</form>
                                </div>
                            </div>
            </div>


        );
    }
}

export default formXbox360;