import AllTask from "../other/AllTask"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"

const AdminDashboard = () => {
    return (
        <div className="p-7 h-screen w-full">
            <Header />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard