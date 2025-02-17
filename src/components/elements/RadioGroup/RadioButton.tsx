interface RadioItemProps {
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export default function RadioButton({
  value,
  name,
  checked,
  onChange,
}: RadioItemProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        className="radio radio-success"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span>{value}</span>
    </label>
  );
}
