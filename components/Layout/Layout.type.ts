import { ReactNode } from "react";

export interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
}

export interface LayoutProps {
  headerProps?: HeaderProps;
  children: ReactNode;
  scrollable?: boolean;
}
