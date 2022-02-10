import { StateType } from "../ChatWindow/ChatState.type";

export type ChatsListBarType = {
  state: StateType[];
  selectedChat: number;
  setSelectedChat: (selectedChat: number) => void;
};
