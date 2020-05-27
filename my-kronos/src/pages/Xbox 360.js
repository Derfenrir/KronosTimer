import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './xbox360.css';
class Xbox extends Component {
  render() {
    return (
      <div>
        <Link className="btn btn-primary mt-2" to="/xbox36" role="button">Agendar Horario</Link>
<div className = "tabla">

<table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Maquina</th>
              <th scope="col">8-9</th>
              <th scope="col">9-10</th>
              <th scope="col">10-11</th>
              <th scope="col">11-12</th>
              <th scope="col">12-1</th>
              <th scope="col">1-2</th>
              <th scope="col">2-3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Maq1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Maq2</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Maq3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Maq4</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Maq5</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Maq6</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
</div>
        
      </div>
    );
  }
}

export default Xbox;