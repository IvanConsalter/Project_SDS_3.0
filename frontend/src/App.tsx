import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';

function App() {
  return (
    <>
    <div>
      <NavBar />
      <div className="container">
        <DataTable />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
