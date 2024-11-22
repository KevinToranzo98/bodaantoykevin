function ConfirmAttendance() {
  return (
    <div className="w-full bg-white m-auto flex flex-col items-center justify-center gap-10 px-14 py-28 md:px-0">
      <img src="/checklist.svg" />
      <a
        target="_blank"
        href="https://p02jvynd.forms.app/formularioinvitados"
        className="text-center text-primary font-medium text-xl underline md:text-2xl"
      >
        Confirmá tu asistencia haciendo click acá
      </a>
    </div>
  );
}

export default ConfirmAttendance;
