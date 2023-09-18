import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus, userTasks } from '../../redux/features/tasks/taskSlice';
import TaskDetailsModal from './TaskDetailsModal';





const MyTasks = () => {

  const dispatch = useDispatch();
  const { tasks, userSpecificTasks } = useSelector(state => state.tasksSlice);
  const { name: userName } = useSelector(state => state.userSlice);
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);


  useEffect(() => {
    dispatch(userTasks(userName))
  }, [userName, tasks]);


  const handleModalId = id => {
    setTaskId(id);
    setIsOpen(!isOpen);
  }



  return (
    <>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          userSpecificTasks?.map(item =>
            <div
              key={item.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1 >{item.title}</h1>
              <div className="flex gap-3">
                <button className="grid place-content-center" title="Details" onClick={() => handleModalId(item.id)}>
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button className="grid place-content-center" title="Done" onClick={() => dispatch(updateStatus({ id: item.id, status: "complete" }))}>
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>)
        }
      </div>
    </>
  );
};

export default MyTasks;
