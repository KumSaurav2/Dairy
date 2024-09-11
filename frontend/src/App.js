import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { DairyContextProvider } from "./reducer/DairyReducer";
import PopUpForm from "./popupForm/popUpForm";
import PopUpContextProvider from "./context/PopUpContex";


function App() {

  return (
      <DairyContextProvider>
        <div className="App">
        <PopUpContextProvider>
            <Navbar />
            <Home />
            <PopUpForm />
          </PopUpContextProvider>
        </div>
      </DairyContextProvider>
    
  );
}

export default App;
