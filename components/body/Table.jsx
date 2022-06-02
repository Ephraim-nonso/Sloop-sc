import React from "react";

const Table = () => {
  return (
    <div className="">
      <table class="table-fixed w-full bg-[#fff] h-96">
        <thead className="text-[#17C7C0]">
          <tr className="p-5">
            <th>Location</th>
            <th>Last distribution date</th>
            <th>Verified by</th>
            <th>Pending approval</th>
            <th>Total received</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lagos Office</td>
            <td>12-05-21</td>
            <td>1961</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Ibadan Office</td>
            <td>12-05-21</td>
            <td>1972</td>
            <td>1972</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Lagos II Office</td>
            <td>12-05-21</td>
            <td>1975</td>
            <td>1975</td>
            <td>1975</td>
          </tr>
          <tr>
            <td>Ekiti Office</td>
            <td>12-05-21</td>
            <td>1975</td>
            <td>1975</td>
            <td>1975</td>
          </tr>
          <tr>
            <td>Kaduna Office</td>
            <td>12-05-21</td>
            <td>1975</td>
            <td>1975</td>
            <td>1975</td>
          </tr>
          <tr>
            <td>Ondo Office</td>
            <td>12-05-21</td>
            <td>1975</td>
            <td>1975</td>
            <td>1975</td>
          </tr>
          <tr>
            <td>Ogun Office</td>
            <td>12-05-21</td>
            <td>1975</td>
            <td>1975</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
