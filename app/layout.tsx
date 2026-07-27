import "./style.css";

export const metadata = {
  title: "Mon site",
  description: "Mon portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}