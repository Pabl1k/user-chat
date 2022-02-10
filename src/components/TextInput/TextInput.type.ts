export type TextInputType = {
  type?: string;
  placeholder?: string;
  showIcon?: boolean;
  setIsModal: () => void;
  value: string;
  setValue: (value: string) => void;
};
