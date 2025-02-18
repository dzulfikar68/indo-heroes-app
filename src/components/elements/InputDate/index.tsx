import { ChangeEvent } from "react";

interface InputDateProps {
    name: string;
    title: string;
    date: string;
    onDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputDate({
    name,
    title,
    date,
    onDateChange
}: InputDateProps) {

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     onDateChange(e.target.value);
    // };

    return (
        <>
            <label className="block text-sm font-medium">{title}</label>
            <input
              type="number"
              min="1900" max="2100" step="1" placeholder="YYYY" maxLength={4}
              name={name}
              value={date}
              onChange={onDateChange}
              className="w-full p-2 border rounded mt-1 mb-4"
            />
        </>
    );
}