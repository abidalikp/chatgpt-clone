import PlusIcon from "../assets/Plus";
import SendIcon from "../assets/Send";
import { IconButton } from "./Button";

const ChatInput = () => {
  return (
    <div className="flex flex-col gap-1 md:rounded-xl border border-secondary-4 bg-secondary-3 p-2 max-w-3xl mx-auto w-full">
      <textarea
        placeholder="Message ChatGPT"
        rows={1}
        className="w-full outline-none p-2 resize-none"
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <IconButton>
            <PlusIcon />
          </IconButton>
        </div>
        <div className="flex gap-1">
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default ChatInput;
