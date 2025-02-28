import { useState } from "react";
import TaskForm from "../components/taskForm";
import TaskList from "../components/taskList";
import "./dashboard.css";
import TaskFilters from "../components/taskFilters";

const Dashboard = () => {
    const [taskList, setTaskList] = useState([
        // {
        //     workTitle: "Development",
        //     taskTitle: "Dashboard UI",
        //     assignee: "Vishal",
        //     deadline: "2025-01-31",
        //     assignor: "Likhilesh",
        // },
        // {
        //     workTitle: "Design",
        //     taskTitle: "Landing Page",
        //     assignee: "Aditi",
        //     deadline: "2025-02-05",
        //     assignor: "Rahul",
        // },
        // {
        //     workTitle: "Marketing",
        //     taskTitle: "Ad Campaign",
        //     assignee: "Sanjay",
        //     deadline: "2025-02-10",
        //     assignor: "Neha",
        // },
        // {
        //     workTitle: "Testing",
        //     taskTitle: "API Testing",
        //     assignee: "Priya",
        //     deadline: "2025-02-15",
        //     assignor: "Karan",
        // },
        // {
        //     workTitle: "Development",
        //     taskTitle: "Backend Optimization",
        //     assignee: "Rohan",
        //     deadline: "2025-02-20",
        //     assignor: "Vikram",
        // },
        // {
        //     workTitle: "Design",
        //     taskTitle: "Mobile App UI",
        //     assignee: "Sneha",
        //     deadline: "2025-02-25",
        //     assignor: "Anjali",
        // },
        // {
        //     workTitle: "Content Writing",
        //     taskTitle: "Blog Post",
        //     assignee: "Harsh",
        //     deadline: "2025-03-01",
        //     assignor: "Megha",
        // },
        // {
        //     workTitle: "SEO",
        //     taskTitle: "Keyword Research",
        //     assignee: "Ritika",
        //     deadline: "2025-03-05",
        //     assignor: "Ankit",
        // },
        // {
        //     workTitle: "Development",
        //     taskTitle: "Authentication System",
        //     assignee: "Aman",
        //     deadline: "2025-03-10",
        //     assignor: "Suresh",
        // },
        // {
        //     workTitle: "Testing",
        //     taskTitle: "Performance Testing",
        //     assignee: "Komal",
        //     deadline: "2025-03-15",
        //     assignor: "Rajeev",
        // },
        // {
        //     workTitle: "Marketing",
        //     taskTitle: "Social Media Strategy",
        //     assignee: "Varun",
        //     deadline: "2025-03-20",
        //     assignor: "Pooja",
        // },
        // {
        //     workTitle: "HR",
        //     taskTitle: "Recruitment Drive",
        //     assignee: "Nikita",
        //     deadline: "2025-03-25",
        //     assignor: "Ramesh",
        // },
        // {
        //     workTitle: "Development",
        //     taskTitle: "Bug Fixing",
        //     assignee: "Vishal",
        //     deadline: "2025-01-31",
        //     assignor: "Likhilesh",
        // },
        // {
        //     workTitle: "Design",
        //     taskTitle: "Logo Redesign",
        //     assignee: "Aditi",
        //     deadline: "2025-02-05",
        //     assignor: "Rahul",
        // },
        // {
        //     workTitle: "Marketing",
        //     taskTitle: "Email Campaign",
        //     assignee: "Sanjay",
        //     deadline: "2025-02-10",
        //     assignor: "Neha",
        // },
        // {
        //     workTitle: "Testing",
        //     taskTitle: "Unit Testing",
        //     assignee: "Priya",
        //     deadline: "2025-02-15",
        //     assignor: "Karan",
        // },
        // {
        //     workTitle: "Development",
        //     taskTitle: "Feature Implementation",
        //     assignee: "Rohan",
        //     deadline: "2025-02-20",
        //     assignor: "Vikram",
        // },
        // {
        //     workTitle: "Design",
        //     taskTitle: "Wireframing",
        //     assignee: "Sneha",
        //     deadline: "2025-02-25",
        //     assignor: "Anjali",
        // },
        // {
        //     workTitle: "Content Writing",
        //     taskTitle: "Case Study",
        //     assignee: "Harsh",
        //     deadline: "2025-03-01",
        //     assignor: "Megha",
        // },
        // {
        //     workTitle: "SEO",
        //     taskTitle: "Backlink Analysis",
        //     assignee: "Ritika",
        //     deadline: "2025-03-05",
        //     assignor: "Ankit",
        // },
        // {
        //     workTitle: "Development",
        //     taskTitle: "Security Patching",
        //     assignee: "Aman",
        //     deadline: "2025-03-10",
        //     assignor: "Suresh",
        // },
        // {
        //     workTitle: "Testing",
        //     taskTitle: "Regression Testing",
        //     assignee: "Komal",
        //     deadline: "2025-03-15",
        //     assignor: "Rajeev",
        // },
        // {
        //     workTitle: "Marketing",
        //     taskTitle: "Influencer Outreach",
        //     assignee: "Varun",
        //     deadline: "2025-03-20",
        //     assignor: "Pooja",
        // },
        // {
        //     workTitle: "HR",
        //     taskTitle: "Employee Training",
        //     assignee: "Nikita",
        //     deadline: "2025-03-25",
        //     assignor: "Ramesh",
        // },
    ]);
    const [filterAssignee, setFilterAssignee] = useState("");
    const [filterAssignor, setFilterAssignor] = useState("");
    const [filterDeadline, setFilterDeadline] = useState("");

    const assigneeOptions = [
        "Vishal",
        "Aditi",
        "Sanjay",
        "Priya",
        "Rohan",
        "Sneha",
        "Harsh",
        "Ritika",
        "Aman",
        "Komal",
        "Varun",
        "Nikita",
    ];

    const assignorOptions = [
        "Likhilesh",
        "Rahul",
        "Neha",
        "Karan",
        "Vikram",
        "Anjali",
        "Megha",
        "Ankit",
        "Suresh",
        "Rajeev",
        "Pooja",
        "Ramesh",
    ];

    return (
        <div className="dashboard-container">
            <a href="/">Home</a>
            <h1 className="title">Dashboard for Tasks</h1>
            <TaskForm setTaskList={setTaskList} assigneeOptions={assigneeOptions} />
            <TaskFilters
                assigneeOptions={assigneeOptions}
                assignorOptions={assignorOptions}
                setFilterAssignee={setFilterAssignee}
                setFilterAssignor={setFilterAssignor}
                setFilterDeadline={setFilterDeadline}
            ></TaskFilters>
            <TaskList
                taskList={taskList}
                filterAssignee={filterAssignee}
                filterAssignor={filterAssignor}
                filterDeadline={filterDeadline}
                setTaskList={setTaskList}
                filterKeyword="todo"
                title="TODO"
            />
            <TaskList
                taskList={taskList}
                filterAssignee={filterAssignee}
                filterAssignor={filterAssignor}
                filterDeadline={filterDeadline}
                setTaskList={setTaskList}
                filterKeyword="done"
                title="DONE"
            />
        </div>
    );
};

export default Dashboard;
