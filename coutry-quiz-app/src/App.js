import "antd/dist/antd.css";
import "./App.css";
import { CardComponent } from "./components/card";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="containerMain">
      <div className="figureone"></div>
      <div className="figuretwo"></div>
      <CardComponent />
      <Footer />
    </div>
  );
}

export default App;
