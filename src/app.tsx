import { ConfigProvider } from "antd";
import { createElement } from "react";
import type { FC, ReactNode } from "react";

const ConfigProviderCom: FC<{ children: ReactNode }> = ({ children }) => (
  <ConfigProvider autoInsertSpaceInButton={false}>{children}</ConfigProvider>
);

export function rootContainer(container: any) {
  return createElement(ConfigProviderCom, null, container);
}
