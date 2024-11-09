import { Trees } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex flex-row gap-2 py-4 px-2 items-center">
      <Trees size={40} />
      <h4 className="pt-1">Idle Companion</h4>
    </div>
  );
}
