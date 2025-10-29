import { User } from "@/types";

export type HomeScreenProps = {
  loading?: boolean;
  handleLogout: () => void;
  user?: User | null;
};
