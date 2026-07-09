// import AppRoutes from './routes/AppRoutes';

// function App() {
//   return <AppRoutes />;
// }

// export default App;


import AppRoutes from "./routes/AppRoutes";
import { EnquiryProvider } from "./context/EnquiryContext";

function App() {
  return (
    <EnquiryProvider>
      <AppRoutes />
    </EnquiryProvider>
  );
}

export default App;