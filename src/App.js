import "./styles.css";
import { NavBar } from "./components/Navbar";
import { SideBar } from "./components/Sidebar";
import { ProductCard } from "./components/Productcard";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <div>
          <SideBar />
        </div>
        <div className="prod_conatainer">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
