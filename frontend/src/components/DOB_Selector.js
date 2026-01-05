import { useState, useEffect } from "react";

export const DateOfBirthSelector = () => {
  const currentYear = new Date().getFullYear();
  

  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");


  useEffect(() => {
    if (selectedYear && selectedMonth !== "") {
      const monthIndex = months.indexOf(selectedMonth);

      const numDays = new Date(selectedYear, monthIndex + 1, 0).getDate();

      setDays(Array.from({ length: numDays }, (_, i) => i + 1));

      if (selectedDay > numDays) setSelectedDay("");
    }
  }, [selectedMonth, selectedYear]);

  return (
    <div className="dob-selector">
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>

      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        disabled={!selectedMonth || !selectedYear}
      >
        <option value="">Day</option>
        {days.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
}

