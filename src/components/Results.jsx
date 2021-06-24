import React from 'react';
import { Table } from 'react-bootstrap';

function Results({ data }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        </tr>
      </thead>
      <tbody>
        <tr key={data.radioOption}>
          <td>{data.radioOption}</td>
          <td>{data.radioOption2}</td>
          <td>{data.radioOption3}</td>
          <td>{data.radioOption4}</td>
          <td>{data.radioOption5}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Results;
