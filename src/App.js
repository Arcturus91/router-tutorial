import { Outlet,Link } from "react-router-dom"; // 1) primero importamos Link
import "./App.css";

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      {/* 2) luego agregamos unas rutas: (aqui lo importante es notar que cuando
       le des click, no va a haber un full renderizado de la página.).
        Hasta aquí, la ruta funciona. Es decir, cuando apretas el link, te envía a 
      http://localhost:3000/invoices por ejemplo. */}  
        
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
        
      </nav> {/* 3) el outlet será el elemento que haga salir los nested components. */}
      <Outlet />

    </div>
  );
}

export default App;
