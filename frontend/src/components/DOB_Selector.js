import { useEffect, useState } from "react";

export const DateOfBirthSelector = (props) => {
  const { year, setYear, month, setMonth, day, setDay } = props;

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [days, setDays] = useState([]);

  useEffect(() => {
    if (year && month !== "") {
      const monthIndex = months.indexOf(month);
      const numDays = new Date(year, monthIndex + 1, 0).getDate();
      setDays(Array.from({ length: numDays }, (_, i) => i + 1));

      if (day > numDays) setDay("");
    }
  }, [month, year]);

  return (
    <div className="dob-selector">  
      <p>Birthday:</p>
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      >
        <option value="">Month</option>
        {months.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <select
        value={day}
        onChange={(e) => setDay(e.target.value)}
        disabled={!month || !year}
      >
        <option value="">Day</option>
        {days.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
};
