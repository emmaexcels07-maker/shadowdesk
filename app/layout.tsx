import { ReactNode } from "react";
import { MotionProvider } from "./components/MotionProvider";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
