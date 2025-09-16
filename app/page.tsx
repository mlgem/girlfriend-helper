"use client";
import { useState } from "react";
import HistoryPage from "./history/page";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [showButton, setShowButton] = useState<number>(1);
  const [headerText, setHeaderText] = useState<string>("Hey There");
  const [bodyText, setBodyText] = useState<string>(
    "it's your birthday!! so i made yuo a little something"
  );
  const [buttonText, setButtonText] = useState("click meee!");
  const [imageUrl, setImageUrl] = useState(
    "https://media1.tenor.com/m/RjINDshJG48AAAAd/cat-smile.gif"
  );

  const buttonClick = () => {
    console.log("hello");
    setShowButton(2);
    setImageUrl("https://media1.tenor.com/m/3Cs_AKNDxRwAAAAC/gato-lengua.gif");
    setHeaderText("HEHE YOU MISSED!!");
    setButtonText("heyy im heree");
    setBodyText("");
  };
  const secondButtonClick = () => {
    setShowButton(3);
    setImageUrl(
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXQ1YjZwaGtrMDB6aGd6ODk1N3dnNXJtZnRjNWE3ZzlzMzl5ZXZzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ctkctoAVxOpyWBs7A/giphy.gif"
    );
    setHeaderText("HAHAHAHA!!");
    setButtonText("howd u miss that??");
    setBodyText("🤣🤣🤣🤣🤣");
  };
  const thirdButtonClick = () => {
    setShowButton(4);
    setImageUrl(
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN25xa2RvendmenNpdjdyNmZ2ZnJidW5jamt2a2x6bjM2anI0bGM0bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2zUn8hAwJwG4abiS0p/giphy.gif"
    );
    setHeaderText("hehe are yuo mad now?");
    setBodyText("😐😐😐😐 oke last na tlga i lab yuu");
    setButtonText("clickk me 💕");
  };
  const fourthButtonClick = () => {
    setPage(2);
  };
  return (
    <>
      {page == 1 && (
        <>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <img src={imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">{headerText}</h1>
                <p className="py-6">{bodyText}</p>
                {showButton === 1 && (
                  <div className="flex">
                    <button
                      className="btn btn-primary cursor-default hover:bg-primary hover:border-primary"
                      onClick={buttonClick}
                    >
                      {buttonText}
                    </button>
                  </div>
                )}
                {showButton === 2 && (
                  <div className="flex justify-center">
                    <button
                      className="btn btn-primary cursor-default hover:bg-primary hover:border-primary"
                      onClick={secondButtonClick}
                    >
                      {buttonText}
                    </button>
                  </div>
                )}
                {showButton === 3 && (
                  <div className="flex justify-end">
                    <button
                      className="btn btn-primary cursor-default hover:bg-primary hover:border-primary"
                      onClick={thirdButtonClick}
                    >
                      {buttonText}
                    </button>
                  </div>
                )}
                {showButton === 4 && (
                  <div className="flex justify-center">
                    <button
                      className="btn bg-pink-400"
                      onClick={fourthButtonClick}
                    >
                      {buttonText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {page == 2 && <HistoryPage />}
    </>
  );
}
