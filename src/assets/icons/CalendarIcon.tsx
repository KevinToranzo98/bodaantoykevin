function CalendarIcon({ color = '#a7b3a3', size = '20' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4005 2.80005H2.80049C1.80638 2.80005 1.00049 3.60594 1.00049 4.60005V17.2C1.00049 18.1942 1.80638 19 2.80049 19H15.4005C16.3946 19 17.2005 18.1942 17.2005 17.2V4.60005C17.2005 3.60594 16.3946 2.80005 15.4005 2.80005Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7007 1V4.6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.50049 1V4.6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.00049 8.19995H17.2005"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CalendarIcon;
