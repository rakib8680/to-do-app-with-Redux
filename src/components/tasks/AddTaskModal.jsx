import React from 'react';
import Modal from '../ui/Modal';
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-1 mt-5 mb-5' >
                        <label htmlFor="title">Title</label>
                        <input type='text' id='title' {...register("name")} className="rounded-sm" />
                    </div>

                    <div className='flex flex-col gap-1 mb-5' >
                        <label htmlFor="title">Description</label>
                        <textarea type='text' id='description' {...register("description")} className="rounded-sm" />
                    </div>

                    <div className='flex flex-col gap-1 mb-5' >
                        <label htmlFor="title">Deadline</label>
                        <input type='date' id='date' {...register("date")} className="rounded-sm" />
                    </div>

                    <div className='flex flex-col gap-1 mb-5' >
                        <label htmlFor="title">Assign To</label>
                        <select

                            id='assignTo'
                            {...register("assignTo")} className="rounded-sm"
                        >
                            <option value="Akaza">Akaza</option>
                            <option value="Muzan">Muzan</option>
                            <option value="Zenitsu">Zenitsu</option>
                            <option value="Levi Ackerman">Levi Ackerman</option>
                            <option value="Madara Uchiha">Madara Uchiha</option>
                            <option value="Yoriichi">Yoriichi</option>
                            <option value="Muzan kibutsuji">Muzan kibutsuji</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-1 mb-5' >
                        <label htmlFor="title">Priority</label>
                        <select

                            id='priority'
                            {...register("priority")} className="rounded-sm"
                        >
                            <option defaultValue value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    <div className='flex justify-around pt-5'>
                        <button type='button' className='bg-red-400 px-5 py-2 text-white rounded-md font-semibold'>Cancel</button>
                        <button type='submit'  className='bg-blue-400 px-5 py-2 text-white rounded-md font-semibold' >Submit</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;