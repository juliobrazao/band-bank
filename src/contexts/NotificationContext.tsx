import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface NotificationContextProps {
  showNotification: boolean;
  setShowNotification: Dispatch<SetStateAction<boolean>>;
  handleToggleNotification: () => void;
}

interface NotificationContextProviderProps {
  children: ReactNode;
}

export const NotificationContext = createContext<
  Partial<NotificationContextProps>
>({
  showNotification: false,
  setShowNotification: () => {},
  handleToggleNotification: () => {},
});

export default function NotificationContextProvider({
  children,
}: NotificationContextProviderProps) {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleToggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <>
      <NotificationContext.Provider
        value={{
          showNotification,
          setShowNotification,
          handleToggleNotification,
        }}
      >
        {children}
      </NotificationContext.Provider>
    </>
  );
}
