import "@styles/globals.css";
import NavigationBar from "@components/NavigationBar";

export const metadata = {
  title: "Koolprompts",
  description:
    "Discover awesome prompts that you can re use, they are open source",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <NavigationBar />
          {children}
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
