import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <div>
                <NavBar />
                <div className="container">
                    <h1 className="text-primary py-3">Sales DashBoard</h1>
                    <div className="row px-3">
                        <div className="col-12 col-md-6">
                            <h4 className="text-secondary text-center">
                                Success Rate (%)
                            </h4>
                            <BarChart />
                        </div>
                        <div className="col-12 col-md-6">
                            <h4 className="text-secondary text-center">
                                Sales Share
                            </h4>
                            <DonutChart />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-primary py-3">All Sales</h2>
                    </div>
                    <DataTable />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
