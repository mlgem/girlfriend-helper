"use client";
import { useEffect, useState } from "react";
import { Chewy } from "next/font/google";

const chewyFont = Chewy({
  subsets: ["latin"],
  weight: "400",
});
const HistoryPage = () => {
  const [scene, setScene] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => setScene(2), 2000);
  }, []);

  return (
    <>
      {scene == 1 && (
        <div className="card bg-orange-100 w-96 shadow-sm">
          <div
            className={`card-body items-center ${chewyFont.className} text-2xl`}
          >
            HISTORY OF BABY
            <img src="https://media1.tenor.com/m/QoYaZqdR810AAAAd/cat.gif" />
          </div>
        </div>
      )}
      {scene == 2 && (
        <div className="space-y-4">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
      )}
    </>
  );
};

export default HistoryPage;
