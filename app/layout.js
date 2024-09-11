import "./globals.css";



export const metadata = {
  title: "Web Dev 2 Demo",
  description: "Demos...for Web Dev2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
