import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ShowStore {
  isShow: boolean;
  setIsShow: (data: boolean) => void;
}

// export const useModalStore = create<ModalStore>((set) => ({
//   submittedData: null,
//   setSubmittedData: (data) => set({ submittedData: data }),
// }));

export const useShowStore = create(
  persist<ShowStore>(
    (set) => ({
        isShow: false,
        setIsShow: (data) => set({ isShow: data }),
    }),
    {
      name: "modal-store", // Key untuk localStorage
    }
  )
);