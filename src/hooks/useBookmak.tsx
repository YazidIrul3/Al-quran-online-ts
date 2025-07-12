import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Props = {
  surah: Item[];
  addToBookmark: (item: Item) => void;
  deleteBookmark: (i: number) => void;
};

interface Item {
  ayat: number;
  lafadz: string;
  surah: string | undefined;
  inSurah: number;
  arti: string;
}

export const useBookmark = create<Props>()(
  persist(
    (set, get) => ({
      surah: [],
      addToBookmark: (item: Item) => {
        const current = get().surah;
        set({ surah: [...current, item] });
      },
      deleteBookmark: (i: number) => set({ surah: get().surah.slice(0, i) }),
    }),
    {
      name: "bookmark", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
