import CreateToDo from "./CreateToDo";
import Profile from "./Profile";

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center gap-5 my-5 px-10 rounded-full w-fit mx-auto border-2 py-5 items-center">
                <CreateToDo></CreateToDo>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Dashboard;