import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatus, userTasks } from '../../redux/features/tasks/taskSlice';

const MyTasks = () => {

  const dispatch = useDispatch();

  const { tasks, userSpecificTasks } = useSelector(state => state.tasksSlice);
  const { name: userName } = useSelector(state => state.userSlice);

  useEffect(() => {
    dispatch(userTasks(userName))
  }, [userName, tasks]);

  return (
    <>
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
                <button className="grid place-content-center" title="Details">
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
