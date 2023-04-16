import { useEffect, useState } from "react";

export default function BatteryStatus() {
  const [isCharging, setIsCharging] = useState(false);
  useEffect(() => {
    navigator.getBattery().then((battery) => {
      const onBatteryChange = () => setIsCharging(battery.charging);
      onBatteryChange();
      battery.addEventListener("chargingchange", onBatteryChange);
      battery.removeEventListener("chargingchange", onBatteryChange);
    });
  }, []);
  return (
    <div>
      <h2>Battery status</h2>
      <p>Charging: {isCharging ? "YES" : "No"}</p>
    </div>
  );
}
