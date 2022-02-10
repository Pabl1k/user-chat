export type StateType = {
  icon: string;
  companyName: string;
  companyUser: string;
  messages: messagesType[];
};

type messagesType = {
  message: string;
  dateTime: string;
  isReceived: boolean;
};
