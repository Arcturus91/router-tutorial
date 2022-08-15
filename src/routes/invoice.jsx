import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let { invoiceId } = useParams(); //show the params of the url
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  let invoice = getInvoice(Number(invoiceId));
  //console.log(invoice)
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total due: {invoice.amount}</h2>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due date: {invoice.due}</p>

      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);

          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
/* Notice we used useLocation again to persist the query string by adding location.search to the navigation link. */