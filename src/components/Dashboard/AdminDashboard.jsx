import Header from "../other/Header"

const AdminDashboard = () => {
    return (
        <div className="p-10">
            <Header />

            <div>
                <form className="flex items-start justify-between ">
                    <div>
                        <h3>Task TItle</h3>
                        <input type="text" placeholder="Write the title" />
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input type="date" />
                    </div>

                    <div>
                        <h3>Assign to</h3>
                        <input type="text" placeholder="Employee Name" />
                    </div>

                    <div>
                        <h3>Category</h3>
                        <input type="text" placeholder="design, dev, etc" />
                    </div>
                    <button>Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard