import "./globals.css";
export const metadata = { title: "Rozlance - Rozgar Ka Naya Andaaz | Pakistan", description: "Pakistan's Next Talent Network - Founder Ubaid Bin Mushtaq" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}