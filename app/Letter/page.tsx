const Letter = () => (
  <div className="hero rounded-2xl bg-base-200 w-2xl">
    <div className="hero-content text-center pt-12">
      <div className="w-full max-w-4xl">
        <div className="flex flex-row">
          <h1 className="text-5xl font-bold text-left">
            Happy 27th Birthday lablab!
          </h1>
          <div
            className="tooltip tooltip-open"
            data-tip="hover ur mouse here hehe"
          >
            <figure className="hover-gallery max-w-60">
              <img className="max-w-50 max-h-50" src="./page0.jpg" />
              <img className="max-w-50 max-h-50" src="./page1.jpg" />
              <img className="max-w-50 max-h-50" src="./page2.jpg" />
              <img className="max-w-50 max-h-50" src="./page3.jpg" />
            </figure>
          </div>
        </div>
        <p className="py-6 text-left">
          first of all im so sorry for my sorry attempt in a website huhu This
          thing is hard!
          <span>
            <img
              className="max-w-8 max-h-8"
              src="https://media.tenor.com/BpmluvLL3qEAAAAi/mald.gif"
            />
          </span>
          <br />
          <br />
          {
            "anyway enough of that, its ur 27th birthday baby!! we spent most of"
          }
          {
            " our 20's together na! damnnnn buti d ka pa sawa sakin! hahahah. I'm"
          }
          {" proud of you always lab, with what you've accomplished na. i know"}
          {
            " you pretty rough on yourself and think that you still haven't done"
          }
          {
            " much but das not true! you've come a long way na and just know i'll"
          }
          {" always be here for you every step of the way, even if im a little"}
          {
            " klutzy sometimes hehe. I love you very much baby, slowly but surely,"
          }
          {
            " we're moving towards our goal and finally be together for good na."
          }
          {" so let's just hang in there oki? "}
          <br />
          <br />
          from the most pogi and talented bf!
        </p>
      </div>
    </div>
  </div>
);

export default Letter;
