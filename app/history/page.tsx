"use client";
import { useEffect, useRef, useState } from "react";
import { Chewy } from "next/font/google";
import ChatStart from "@/components/chatStart";
import ChatEnd from "@/components/chatEnd";
import Letter from "../Letter/page";

const chewyFont = Chewy({
  subsets: ["latin"],
  weight: "400",
});
const HistoryPage = () => {
  const [scene, setScene] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play();
    }
    scenePlayer();
  }, []);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const scenePlayer = async () => {
    for (let i = 1; i < 8; i++) {
      setScene(i);
      await delay(i == 2 ? 4000 : 3000);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/married.wav" loop />
      {scene == 1 && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="card bg-orange-100 w-96 shadow-sm flex items-center justify-center">
            <div
              className={`card-body items-center ${chewyFont.className} text-2xl`}
            >
              HISTORY OF BABY
              <img src="/bby.jpg" />
            </div>
          </div>
        </div>
      )}
      <>
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 px-4">
          {scene == 2 && (
            <>
              <ChatStart
                msg={
                  "hewo gem, u seem lonely i introduce u prettiest girl in the worldd"
                }
              />
            </>
          )}
          {scene == 3 && (
            <>
              <ChatStart
                msg={
                  "hewo gem, u seem lonely i introduce u prettiest girl in the worldd"
                }
              />
              <ChatEnd msg={"yea ryt."} />
            </>
          )}
          {scene == 4 && (
            <>
              <ChatEnd msg={"yea ryt."} />
              <ChatStart
                img={
                  "https://images.cults3d.com/hRcbCnIkekjZYlmz8lXeEcVKUFc=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/21736916/illustration-file/e53c0acc-30b1-49f4-bfcd-53531d99a64b/loopy.jpg"
                }
              />
            </>
          )}
          {scene == 5 && (
            <>
              <ChatStart
                img={
                  "https://images.cults3d.com/hRcbCnIkekjZYlmz8lXeEcVKUFc=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/21736916/illustration-file/e53c0acc-30b1-49f4-bfcd-53531d99a64b/loopy.jpg"
                }
              />
              <ChatEnd
                img={
                  "https://media1.tenor.com/m/btYkcmAPyCcAAAAd/cat-flabbergasted.gif"
                }
              />
            </>
          )}
          {scene == 6 && (
            <>
              <ChatStart
                img={
                  "https://images.cults3d.com/hRcbCnIkekjZYlmz8lXeEcVKUFc=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/21736916/illustration-file/e53c0acc-30b1-49f4-bfcd-53531d99a64b/loopy.jpg"
                }
              />
              <ChatEnd
                img={
                  "https://media1.tenor.com/m/btYkcmAPyCcAAAAd/cat-flabbergasted.gif"
                }
              />
              <ChatEnd
                img={
                  "https://media1.tenor.com/m/ziky0pQTVYUAAAAC/little-cute.gif"
                }
              />
            </>
          )}
          {scene == 7 && <Letter />}
        </div>
      </>
    </>
  );
};

export default HistoryPage;
