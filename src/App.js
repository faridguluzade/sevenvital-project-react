import Root from "./routes/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Root />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontFamily: "sans-serif",
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "#374151",
          },
        }}
      />
    </>
  );
};

export default App;
