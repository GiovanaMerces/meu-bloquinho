import React from 'react';

const TodoTask = ({todoList, completeTask}) => {
    return ( <>
        {todoList.map((task, key) => {
          return (
            <div className='container d-flex align-items-center justify-content-center'>
              <div className="card w-25 mt-5">
                <div className="card-header text-center">
                  <span key={key}> <b>{task.taskName}</b></span>
                </div>
                <div className="card-body text-center">
                  <span key={key}> <b>Estimate:</b> {task.deadline} days</span>
                </div>
  
                <button
                  onClick={() => {
                    completeTask(task.taskName);
                  }}
                >
                  Finished
                </button>
              </div>
            </div>
          );
        })}
      </> );
}
 
export default TodoTask;