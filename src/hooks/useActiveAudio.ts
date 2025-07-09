import { create } from "zustand";

type AudioType = {
  currentAudio: HTMLAudioElement | null;
  setCurrentAudio: (audio: HTMLAudioElement | null) => void;
};

export const useActiveAudio = create<AudioType>((set) => ({
  currentAudio: null,
  setCurrentAudio: (audio) => {
    set({ currentAudio: audio });
  },
}));
