import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState("");
  const [studentData, setStudentData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setStudentData((studentData) => [
      ...studentData,
      {
        name,
        degree,
        date: date.toDateString(),
      },
    ]);
  };

  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "DOB",
      accessor: "date",
    },
    {
      Header: "Qualification",
      accessor: "degree",
    },
  ];

  return (
    <div>
      <p>STUDENT FORM </p>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Student name */}
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* Qualification */}
        <label>Qualification</label>
        <select
          name="degree"
          id="degree"
          onChange={(e) => setDegree(e.target.value)}
          required
        >
          <option value="">Select your highest qualification</option>
          <option value="M.Tech">M.Tech</option>
          <option value="B.Tech">B.Tech</option>
          <option value="Senior Secondary">Senior Secondary</option>
          <option value="Secondary">Secondary</option>
        </select>
        {/* Date of birth */}
        <label>Date Of Birth </label>
        <DatePicker
          selected={date}
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
          onChange={(date) => setDate(date)}
          required
        />
        {/* Submit Button */}
        <input type="submit" />
      </form>
      <ReactTable
        data={studentData}
        columns={columns}
        defaultSorted={[
          {
            // default sorting in ascending order
            // clicking on header will change the sorting ascending from descending and vice-versa
            id: "name",
            desc: false,
          },
        ]}
      />
    </div>
  );
};
export default StudentForm;
