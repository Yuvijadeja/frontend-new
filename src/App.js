import { BrowserRouter, Routes, Route } from "react-router-dom"
import './assets/styles/main.css'
import Login from "./pages/account/Login"
import Base from "./pages/Base"
import DataSources from "./pages/data-sources/DataSources"
import WorkBooks from "./pages/work-books/WorkBooks"
import WorkBook from "./pages/work-books/WorkBook"
import View from './pages/work-books/View'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Base />}>
          <Route path="data-sources" element={<DataSources />} />
          <Route path="/workbooks" element={<WorkBooks />} />
          <Route path="/workbooks/workbook" element={<WorkBook />} />
          <Route path="/workbooks/workbook/view" element={<View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
