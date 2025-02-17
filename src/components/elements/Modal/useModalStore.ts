import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FormState } from "../Modal";

interface ModalStore {
  submittedData: FormState | null;
  setSubmittedData: (data: FormState) => void;
}

// export const useModalStore = create<ModalStore>((set) => ({
//   submittedData: null,
//   setSubmittedData: (data) => set({ submittedData: data }),
// }));

export const useModalStore = create(
  persist<ModalStore>(
    (set) => ({
      submittedData: null,
      setSubmittedData: (data) => set({ submittedData: data }),
    }),
    {
      name: "modal-store", // Key untuk localStorage
    }
  )
);

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface ModalStore {
//   submittedData: FormData | null;
//   setSubmittedData: (data: FormData) => void;
// }

// export const useModalStore = create(
//   persist<ModalStore>(
//     (set) => ({
//       submittedData: null,
//       setSubmittedData: (data) => set({ submittedData: data }),
//     }),
//     {
//       name: "modal-store", // Key untuk localStorage
//     }
//   )
// );

// localStorage.removeItem("modal-store");


// export const useModalStore = create(
//     persist<ModalStore>(
//       (set) => ({
//         submittedData: null,
//         setSubmittedData: (data) => set({ submittedData: data }),
//       }),
//       {
//         name: "modal-store",
//         getStorage: () => sessionStorage, // Pakai sessionStorage
//       }
//     )
//   );