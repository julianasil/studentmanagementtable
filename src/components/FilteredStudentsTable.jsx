import React from 'react';

const getAge = (birthdate) => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const FilteredStudentsTable = ({ filteredData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Surname</th>
          <th>First Name</th>
          <th>Course</th>
          <th>Birthdate</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => {
          const age = getAge(item.birthdate);
          return (
            <tr key={index}>
              <td>{item.lastname}</td>
              <td>{item.firstname}</td>
              <td>{item.course}</td>
              <td>{item.birthdate}</td>
              <td>{age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FilteredStudentsTable;
