"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function StyledComponentsRegistry({ children }: Props) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
