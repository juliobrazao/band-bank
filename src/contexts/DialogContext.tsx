import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface DialogContextProps {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  handleToggleDialog: () => void;
}

interface DialogContextProviderProps {
  children: ReactNode;
}

export const DialogContext = createContext<Partial<DialogContextProps>>({
  showDialog: false,
  setShowDialog: () => {},
  handleToggleDialog: () => {},
});

export default function DialogContextProvider({
  children,
}: DialogContextProviderProps) {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const handleToggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <DialogContext.Provider
        value={{ showDialog, setShowDialog, handleToggleDialog }}
      >
        {children}
      </DialogContext.Provider>
    </>
  );
}
