import { JSX } from "react";

type MessageEndProps = {
  msg?: string;
  img?: string;
};

const ChatEnd = ({ msg, img }: MessageEndProps): JSX.Element => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://media1.tenor.com/m/lh0SduAm-tYAAAAd/cat-deaf.gif"
          />
        </div>
      </div>
      <div className="chat-header">Gem</div>
      {msg && <div className="chat-bubble">{msg}</div>}
      {img && (
        <div className="chat-bubble">
          <img className="max-w-52" src={`${img}`} />
        </div>
      )}
    </div>
  );
};

export default ChatEnd;
