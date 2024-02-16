import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});
export const metadata = {
  title: "Sosmed",
  description: "Sosmednya anak indonesia!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
