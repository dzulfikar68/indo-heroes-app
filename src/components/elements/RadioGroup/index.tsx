import { TypeFilter } from "../Modal";
import RadioButton from "./RadioButton";

interface RadioGroupProps {
  selected: string;
  onSelect: (value: string) => void;
}

export default function RadioGroup({ selected, onSelect }: RadioGroupProps) {
  return (
    <div className="mb-4">
      {/* <h3 className="text-lg font-bold">Filter</h3> */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        {TypeFilter.map((item, index) => (
          <RadioButton
            key={index}
            value={item}
            name="radio-group"
            checked={selected === item}
            onChange={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
