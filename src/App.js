import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddOrEditProduct from "./pages/AddOrEditProduct";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import history from "./utils/history";

function App() {
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" component={Product} exact />
          <Route path="/product/:id" component={ProductDetail} exact />
          <Route path="/cart" component={Cart} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/admin/add" component={AddOrEditProduct} exact />
          <Route path="/admin/edit/:id" component={AddOrEditProduct} exact />
        </Switch>
      </Router>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
