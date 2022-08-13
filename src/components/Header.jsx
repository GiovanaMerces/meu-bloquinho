import React from 'react';


const Header = ({task, handleChange, deadline, addTask}) => {
    return (  <>
        <div className="navbar bg-dark w-100 d-flex align-items-center justify-content-center">
          <div className=" px-5 d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-white">To-do List</h3>
            <input
              type="text"
              className="form-control my-3"
              name="task"
              value={task}
              placeholder="Task..."
              onChange={handleChange}
            />
            <input
              type="number"
              className="form-control"
              name="deadline"
              value={deadline}
              placeholder="Deadline (in days)..."
              onChange={handleChange}
            />
            <button className="btn btn-outline-light my-4" onClick={addTask}>
              Add Task
            </button>
          </div>
        </div>
      </> );
}
 
export default Header;