import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import FilteredStudentsTable from './components/FilteredStudentsTable';
import FSearchBar from './components/FSearchBar';
import CSearchBar from './components/CSearchBar';
import MinDate from './components/MinDate';
import MaxDate from './components/MaxDate';
import ASearchBar from './components/ASearchBar';

const students = [
  { id: 1, lastname: "Ball", firstname: "Dennis", course: "IT", birthdate: "2003/04/04" },
  { id: 2, lastname: "Bolton", firstname: "Basketti", course: "IS", birthdate: "2002/05/04" },
  { id: 3, lastname: "Cooke", firstname: "Shuttle", course: "CS", birthdate: "2001/06/04" },
  { id: 4, lastname: "Ball", firstname: "Polly", course: "DS", birthdate: "1604/09/06" },
  { id: 5, lastname: "Bowling", firstname: "Belle", course: "CS", birthdate: "2005/04/04" },
  { id: 6, lastname: "Jefferson", firstname: "Jeff", course: "IS", birthdate: "1978/04/04" },
  { id: 7, lastname: "Schorble", firstname: "Sally", course: "IT", birthdate: "2023/04/04" },
  { id: 8, lastname: "Dela Cruz", firstname: "Juan", course: "DS", birthdate: "2003/04/04" },
];

const StudentTable = () => {
  const [data, setData] = useState(students);
  const [filters, setFilters] = useState({
    lastname: '',
    firstname: '',
    course: '',
    minDate: '',
    maxDate: '',
    exactAge: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const filterData = () => {
    return data.filter(item => {
      const birthDate = new Date(item.birthdate);
      const age = calculateAge(item.birthdate);
      const isInDateRange = (filters.minDate ? birthDate >= new Date(filters.minDate) : true) &&
                            (filters.maxDate ? birthDate <= new Date(filters.maxDate) : true);
      const matchesExactAge = filters.exactAge ? age === parseInt(filters.exactAge) : true;
      return (
        item.lastname.toLowerCase().includes(filters.lastname.toLowerCase()) &&
        item.firstname.toLowerCase().includes(filters.firstname.toLowerCase()) &&
        item.course.toLowerCase().includes(filters.course.toLowerCase()) &&
        isInDateRange &&
        matchesExactAge
      );
    });
  };

  const filteredData = filterData();

  return (
    <div>
      <h2>Student Management System</h2>
      <SearchBar handleChange={handleChange} />
      <FSearchBar handleChange={handleChange} />
      <CSearchBar handleChange={handleChange} />
      <MinDate handleChange={handleChange} />
      <MaxDate handleChange={handleChange} />
      <ASearchBar handleChange={handleChange} />
      <FilteredStudentsTable filteredData={filteredData} />
    </div>
  );
};

export default StudentTable;
