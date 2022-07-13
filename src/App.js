import HeaderNav from "./container/HeaderNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { MainContent } from "./components/MainContent";
import "./assets/css/style.css";
function App() {
  return (
   <>
   <div className="container-fluid"></div>
   <HeaderNav></HeaderNav>
   <MainContent></MainContent>
   </>
  );
}

export default App;
