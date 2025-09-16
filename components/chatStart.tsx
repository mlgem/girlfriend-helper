import { JSX } from "react";

type ChatStartProps = {
  msg?: string;
  img?: string;
};

const ChatStart = ({ msg, img }: ChatStartProps): JSX.Element => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://media1.tenor.com/m/NY0EwqDe00IAAAAC/cat-cute.gif"
          />
        </div>
      </div>
      <div className="chat-header">Cat Messenger</div>
      {msg && <div className="chat-bubble">{msg}</div>}
      {img && (
        <div className="chat-bubble">
          <img className="max-w-52" src={`${img}`} />
        </div>
      )}
    </div>
  );
};
export default ChatStart;
