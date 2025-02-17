import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import RadioGroup from "../RadioGroup";
import InputDate from "../InputDate";

export interface FormState {
  query: string;
  type: string;
  startDate: string;
  endDate: string;
}

export const TypeFilter = [
  "default",
  "name",
  "query",
  "alive",
  "birth",
  "death",
  "ascend",
];

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormState) => void;
  initialData: FormState | null;
}

export default function ModalForm({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: ModalFormProps) {
  const emptyState = {
    type: "",
    query: "",
    startDate: "",
    endDate: "",
  };
  const [formState, setFormState] = useState<FormState>(
    initialData || emptyState
  );
  // const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Listener untuk memantau perubahan formState
  useEffect(() => {
    console.log("formState berubah:", formState);
    if (isOpen) {
      setFormState(initialData || emptyState);
    }
    return () => {
      console.log("Cleanup formState");
      // setFormState(emptyState);
    };
  }, [isOpen, initialData]); // Akan dipanggil setiap kali formState berubah

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formState);
    // setSubmittedData(formState);
    onClose();
  };

  // const [selected, setSelected] = useState("Option 1");

  const handleSelect = (value: string) => {
    // setSelected(value);
    setFormState({ ...formState, ["type"]: value });
    console.log("Selected:", formState); // Bisa dipakai untuk fetch API atau lainnya
  };

  if (!isOpen) return null;

  const showDates =
    formState.type === TypeFilter[3] ||
    formState.type === TypeFilter[4] ||
    formState.type === TypeFilter[5] ||
    formState.type === TypeFilter[6];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-lg font-bold mb-4">Search & Filter by:</h2>
        <form onSubmit={handleSubmit}>
          <RadioGroup selected={formState.type} onSelect={handleSelect} />
          <div className="mb-4">
            {(!showDates) && (
              <div className="mb-4">
                <label className="block text-sm font-medium">Search</label>
                <input
                  type="text"
                  name="query"
                  placeholder="Search..."
                  value={formState.query}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-1"
                />
              </div>
            )}
            {showDates && (
              <>
                <InputDate
                  name="startDate"
                  title="Start Date"
                  date={formState.startDate}
                  onDateChange={handleChange}
                />
                <InputDate
                  name="endDate"
                  title="End Date"
                  date={formState.endDate}
                  onDateChange={handleChange}
                />
              </>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
