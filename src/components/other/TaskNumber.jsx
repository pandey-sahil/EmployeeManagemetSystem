
const TaskNumber = () => {
  return (
    <div className="flex w-screen mt-10 gap-5">
        <div className="rounded-xl w-[22.2%] py-7 px-9 bg-blue-400">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[22.2%] py-7 px-9 bg-red-400">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[22.2%] py-7 px-9 bg-green-400">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className="rounded-xl w-[22.2%] py-7 px-9 bg-yellow-400">
            <h2 className="text-3xl font-semibold">0</h2>
            <h3 className="text-xl font-medium">New Task</h3>
        </div>

    </div>
  )
}

export default TaskNumber