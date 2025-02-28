import { useState } from 'react';
import Tododisplay from '../components/Tododisplay';
import Todoinput from '../components/Todoinput';
import Todofilter from '../components/Todofilter';
import { Link } from 'react-router';
import '../components/Tododisplay.css';

const Todoapp = () => {
  const assignments = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
  const [taskdooer, settaskdooer] = useState('');
  const [date, setdate] = useState('');

  const [data, setdata] = useState([
    {
      name: 'Documentation Update',
      description: 'Complete the project documentation with new features.',
      date: '2025-02-01',
      assignment: 'Alice',
      status: 'todo',
    },
    {
      name: 'Landing Page Design',
      description: 'Design the landing page with the new branding.',
      date: '2025-02-02',
      assignment: 'Bob',
      status: 'todo',
    },
    {
      name: 'Login Bug Fix',
      description: "Fix the bug where users can't log in on mobile.",
      date: '2025-02-03',
      assignment: 'Charlie',
      status: 'todo',
    },
    {
      name: 'Database Schema Setup',
      description: 'Set up the new database schema for the app.',
      date: '2025-02-04',
      assignment: 'Dave',
      status: 'todo',
    },
    {
      name: 'Code Review for Feature X',
      description: 'Review the code submitted for Feature X.',
      date: '2025-02-05',
      assignment: 'Eve',
      status: 'todo',
    },
    {
      name: 'Unit Tests for Module A',
      description: 'Write unit tests for the core module of the application.',
      date: '2025-02-06',
      assignment: 'Alice',
      status: 'todo',
    },
    {
      name: 'Third-Party API Integration',
      description: 'Integrate the new payment gateway API.',
      date: '2025-02-07',
      assignment: 'Bob',
      status: 'todo',
    },
    {
      name: 'Project Presentation Preparation',
      description: 'Prepare the presentation for the client meeting.',
      date: '2025-02-08',
      assignment: 'Charlie',
      status: 'todo',
    },
    {
      name: 'Authentication System Refactor',
      description: 'Refactor the authentication system to support OAuth.',
      date: '2025-02-09',
      assignment: 'Dave',
      status: 'todo',
    },
    //   // {
    //   //   name: 'Test Cases for Feature Y',
    //   //   description: 'Write test cases to cover Feature Y.',
    //   //   date: '2025-02-10',
    //   //   assignment: 'Eve',
    //   // },
    //   // {
    //   //   name: 'Payment Gateway Debugging',
    //   //   description: 'Debug issues with the payment gateway.',
    //   //   date: '2025-02-11',
    //   //   assignment: 'Alice',
    //   // },
    //   // {
    //   //   name: 'User Dashboard Design',
    //   //   description: 'Design the new user dashboard with better UX.',
    //   //   date: '2025-02-12',
    //   //   assignment: 'Bob',
    //   // },
    //   // {
    //   //   name: 'Database Query Optimization',
    //   //   description: 'Optimize database queries for faster data retrieval.',
    //   //   date: '2025-02-13',
    //   //   assignment: 'Charlie',
    //   // },
    //   // {
    //   //   name: 'API Documentation Update',
    //   //   description: 'Update API documentation to reflect the latest changes.',
    //   //   date: '2025-02-14',
    //   //   assignment: 'Dave',
    //   // },
    //   // {
    //   //   name: 'Security Patch Review',
    //   //   description: 'Review and approve new security patches.',
    //   //   date: '2025-02-15',
    //   //   assignment: 'Eve',
    //   // },
    //   // {
    //   //   name: 'Responsive Design Implementation',
    //   //   description: 'Ensure the website is fully responsive for mobile users.',
    //   //   date: '2025-02-16',
    //   //   assignment: 'Alice',
    //   // },
    //   // {
    //   //   name: 'Performance Optimization',
    //   //   description: 'Work on improving the performance of the application.',
    //   //   date: '2025-02-17',
    //   //   assignment: 'Bob',
    //   // },
    //   // {
    //   //   name: 'Weekly Report Preparation',
    //   //   description: 'Prepare the weekly report for the project progress.',
    //   //   date: '2025-02-18',
    //   //   assignment: 'Charlie',
    //   // },
    //   // {
    //   //   name: 'CI/CD Pipeline Setup',
    //   //   description:
    //   //     'Set up continuous integration and continuous deployment pipelines.',
    //   //   date: '2025-02-19',
    //   //   assignment: 'Dave',
    //   // },
    //   // {
    //   //   name: 'Code Review for Module B',
    //   //   description: 'Assist with code review for Module B.',
    //   //   date: '2025-02-20',
    //   //   assignment: 'Eve',
    //   // },
    //   // {
    //   //   name: 'API Versioning Strategy',
    //   //   description: 'Establish a versioning strategy for the API.',
    //   //   date: '2025-02-21',
    //   //   assignment: 'Alice',
    //   // },
    //   // {
    //   //   name: 'User Authentication Enhancement',
    //   //   description:
    //   //     'Improve user authentication flow with multi-factor authentication.',
    //   //   date: '2025-02-22',
    //   //   assignment: 'Bob',
    //   // },
  ]);

  return (
    <>
      <h3 className="Nav">
        <Link to="/" className="element">
          Home
        </Link>
      </h3>

      <Todoinput setdata={setdata} assignments={assignments} />
      <Todofilter
        assignment={assignments}
        settaskdooer={settaskdooer}
        setdate={setdate}
      />
      <Tododisplay
        data={data}
        dooer={taskdooer}
        date={date}
        setdata={setdata}
        filterkey="todo"
        tittle="Tasks todo"
      />

      <Tododisplay
        data={data}
        dooer={taskdooer}
        date={date}
        setdata={setdata}
        filterkey="inProgress"
        tittle="Tasks in progress"
      />

      <Tododisplay
        data={data}
        dooer={taskdooer}
        date={date}
        setdata={setdata}
        filterkey="done"
        tittle="Completed tasks"
      />
    </>
  );
};

export default Todoapp;
