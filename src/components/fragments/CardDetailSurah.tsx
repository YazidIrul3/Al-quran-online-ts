import { useActiveAudio } from "@/hooks/useActiveAudio";
import { useLastRead } from "@/hooks/useLastRead";
import { useRef, useState } from "react";

type Props = {
  data: data;
  surah: Surah | null;
};

interface Surah {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: {
    short: string;
    long: string;
    transliteration: {
      en: string;
      id: string;
    };
    translation: {
      en: string;
      id: string;
    };
  };
  revelation: {
    arab: string;
    en: string;
    id: string;
  };
  tafsir: {
    id: string;
  };
}

type data = {
  number: {
    inQuran: number;
    inSurah: number;
  };
  meta: {
    juz: number;
    page: number;
    manzil: number;
    ruku: number;
    hizbQuarter: number;
    sajda: {
      recommended: boolean;
      obligatory: boolean;
    };
  };
  text: {
    arab: string;
    transliteration: {
      en: string;
    };
  };
  translation: {
    en: string;
    id: string;
  };
  audio: {
    primary: string;
    secondary: [];
  };
  tafsir: {
    id: {
      short: string;
      long: string;
    };
  };
};

const CardDetailSurah: React.FC<Props> = ({ data, surah }: Props) => {
  const audiORef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { currentAudio, setCurrentAudio } = useActiveAudio();
  const [showIconName, setIconName] = useState<boolean>(false);
  const { setLastRead } = useLastRead();

  const handlePlayAudio = (audioEl: HTMLAudioElement) => {
    setCurrentAudio(audioEl);

    if (currentAudio !== audioEl) {
      setCurrentAudio(audioEl);
      audioEl.play();
      currentAudio?.pause();
    } else {
      audioEl.play();
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className=" text-green-700 font-bold bg-green-200 rounded-full px-3 py-1 w-fit h-fit">
        <h1>{data?.number?.inSurah}</h1>

        <audio
          onEnded={() => setIsPlaying(false)}
          ref={audiORef}
          src={data?.audio?.primary}
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className=" flex flex-row items-center justify-end gap-2">
          {!isPlaying ? (
            <button
              type="button"
              onClick={() => {
                if (audiORef.current) {
                  handlePlayAudio(audiORef.current);
                  setIsPlaying(true);
                }
              }}
              className=" w-[30px] h-[30px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-play"
                viewBox="0 0 16 16"
              >
                <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (audiORef.current) {
                  audiORef.current.pause();
                  setIsPlaying(false);
                }
              }}
              className=" w-[30px] h-[30px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-pause"
                viewBox="0 0 16 16"
              >
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
          )}

          <button
            type="button"
            onMouseEnter={() => setIconName(true)}
            onMouseLeave={() => setIconName(false)}
            onClick={() =>
              setLastRead({
                audio: data?.audio?.primary,
                inSurah: data?.number?.inSurah,
                juz: data?.meta?.juz,
                nameArab: data?.text?.arab,
                surahName: surah?.name?.transliteration?.id
                  ? surah?.name?.transliteration?.id
                  : "",
                arti: surah?.name?.translation.id
                  ? surah?.name?.translation.id
                  : "",
                ayat: data?.number?.inSurah ? data?.number?.inSurah : 0,
              })
            }
            className=" w-[24px] h-[24px] relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-book"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>

            <div
              className={` w-[100px] bg-slate-200 h-fit text-[8px] px-3 py-2 absolute -left-16 ${
                showIconName ? "" : "hidden"
              }`}
            >
              Tandai Terakhir Baca
            </div>
          </button>
        </div>
        <div className=" flex flex-col justify-end items-end gap-2">
          <h1
            className=" text-3xl font-bold  text-right"
            dangerouslySetInnerHTML={{ __html: data.text?.arab }}
          ></h1>
          <p
            className=" font-extralight text-sm text-justify "
            dangerouslySetInnerHTML={{ __html: data.text?.transliteration?.en }}
          ></p>
        </div>
      </div>

      <div className="text-slate-700 flex flex-col gap-1 ">
        <div className=" flex flex-col p-2">
          <h1 className=" font-bold text-lg">Terjemahan :</h1>
          <h1 className="   text-justify text-sm ">{data?.translation?.id}</h1>
        </div>

        <div className=" flex flex-col gap-2 bg-slate-100  p-2">
          <h2 className=" text-blue-700 font-bold text-sm">Tafsir :</h2>
          <p className=" text-xs text-justify text-blue-700">
            {data?.tafsir?.id?.long}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetailSurah;
