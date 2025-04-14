import "./App.css";
import ChatInput from "./components/ChatInput";
import Conversation from "./components/Conversation";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col w-full bg-secondary-2 h-screen text-primary text-sm">
      <Header />
      <div className="flex flex-col gap-2 flex-grow mx-auto w-full overflow-hidden h-full md:pb-2">
        <Conversation />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
