import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type LastRead = {
  surah: Surah;
  setLastRead: (newSurah: Surah) => void;
};

interface Surah {
  audio: string;
  inSurah: number;
  juz: number;
  nameArab: string;
  surahName: string;
  arti: string;
  ayat: number;
}

export const useLastRead = create<LastRead>()(
  persist(
    (set) => ({
      surah: {
        audio: "",
        inSurah: 0,
        juz: 0,
        nameArab: "",
        surahName: "",
        arti: "",
        ayat: 0,
      },
      setLastRead: (newSurah) => set({ surah: newSurah }),
    }),
    {
      name: "last-read", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
