import React from "react";
import ReactDOM from "react-dom/client"; // ok
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //1) importas BrowserRouter
//importamos los componentes d las rutas
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //3) ahora haces la configuración de las rutas

  <BrowserRouter>
    <Routes>
      {/* 4) Agregas Routes y Route para cada ruta de url que quieras crear
Luego metes cada componente en element. */}
      <Route path="/" element={<App />}>
        {/* 5) ahora hemos hecho un nesting */}
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={
            <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
          }/>
          <Route path=":invoiceId" element={<Invoice />} />{" "}
          {/* nota que los params
           van adentro de una ruta padre. Por otro lado,
           en params, se almacenará con la key: "invoiceId" */}
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There is nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  //2) metes app adentro de browserRouter
);
