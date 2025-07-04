import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Moreito Reklambyrå || Professionella Reklamvideos och Digital",
  description:
    "Moreito Reklambyrå skapar professionella och prisvärda reklamvideos, sociala medierinnehåll och konverterande landningssidor för småföretag.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv-SE">
      <body>
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
