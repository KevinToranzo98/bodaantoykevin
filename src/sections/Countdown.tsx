import Count from '../components/Count';

function Countdown() {
  return (
    <div className="w-full h-full bg-white m-auto flex items-center justify-center gap-3">
      <Count day="2025-04-12T20:30:00" />
    </div>
  );
}

export default Countdown;
