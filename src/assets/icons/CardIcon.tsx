function CardIcon({ size = '50' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="#a7b3a3"
    >
      <path d="M26.688 10.688V8H5.313v2.688h21.375zm0 13.312v-8H5.313v8h21.375zm0-18.687c1.5 0 2.625 1.188 2.625 2.688v16c0 1.5-1.125 2.688-2.625 2.688H5.313c-1.5 0-2.625-1.188-2.625-2.688v-16c0-1.5 1.125-2.688 2.625-2.688h21.375z"></path>
    </svg>
  );
}

export default CardIcon;
