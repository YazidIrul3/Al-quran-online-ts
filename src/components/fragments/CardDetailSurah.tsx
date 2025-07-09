import { useActiveAudio } from "@/hooks/useActiveAudio";
import { useRef, useState } from "react";

type Props = {
  data: data;
};

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

const CardDetailSurah: React.FC<Props> = ({ data }: Props) => {
  const audiORef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { currentAudio, setCurrentAudio } = useActiveAudio();

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

  console.log(currentAudio);

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
        <div className=" flex flex-row items-center justify-end">
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
