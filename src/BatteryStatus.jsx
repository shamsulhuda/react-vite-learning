import { useEffect, useState } from "react";

export default function BatteryStatus() {
  const [isCharging, setIsCharging] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    let cleanup;
    navigator
      .getBattery()
      .then((battery) => {
        const onBatteryChange = () => setIsCharging(battery.charging);
        onBatteryChange();
        battery.addEventListener("chargingchange", onBatteryChange);
        cleanup = () =>
          battery.removeEventListener("chargingchange", onBatteryChange);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
    return () => {
      // cleanup
      cleanup?.();
    };
  }, []);
  return (
    <div>
      <h2>Battery status</h2>
      {error ? (
        <p>Could not get battery status</p>
      ) : (
        <p>Battery is {isCharging ? "Charging" : "Not charging"}</p>
      )}
    </div>
  );
}
