import { useAppDispatch, useAppSelector } from "@/hooks";
import { ErrorScreen } from "@/screens";
import { selectAuthUser } from "@/store";
import { handleBackNavigation } from "./Error.utils";

export const ErrorContainer = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectAuthUser);

  return (
    <ErrorScreen handleBack={() => handleBackNavigation({ user, dispatch })} />
  );
};

export default ErrorContainer;
