import React, {useState} from 'react';
import {AiFillCloseCircle, AiFillPlusCircle} from "react-icons/ai";
import {SubmitHandler, useForm} from "react-hook-form";

export type TodoListItemType = {
    name: string;
    isCompleted: boolean;
    dateTime: string
}


export type TodoListItemsType = Array<TodoListItemType>

const TodoListItems = ({items, onAddItem}: {
    items: TodoListItemsType,
    onAddItem: (item: TodoListItemType) => void
}) => {

    const [isAddingForm, setIsAddingForm] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<TodoListItemType>()
    const onSubmit: SubmitHandler<TodoListItemType> = (data) => {
        onAddItem({...data, isCompleted: false})
    }
    return (
        <div className={'w-full'}>
            {items.map((item, index) => (
                <div key={index} className={'w-full flex flex-row  p-2 hover:scale-105 duration-75 group'}>
                    <div
                        className={'bg-white w-full p-4 group-hover:py-6 flex flex-row justify-start items-center gap-3 rounded-xl group-hover:rounded-none shadow-md'}>
                        <div
                            className={'border-2 border-orange-300 size-5 rounded-full flex flex-row items-center justify-center'}>
                            {item.isCompleted && <div className={'size-2 bg-orange-300 rounded-full'}/>}
                        </div>
                        <div className="flex flex-col">
                            <div>{item.name}</div>
                            <div className={' opacity-50 text-sm'}>{new Date(item.dateTime).toLocaleString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true
                            })}</div>
                        </div>
                    </div>

                </div>
            ))}
            <button onClick={() => setIsAddingForm(!isAddingForm)}
                    className={'w-fit flex cursor-pointer m-4 items-center gap-2 flex-row justify-start group'}>
                {isAddingForm ?
                    <AiFillCloseCircle className={'text-red-500 opacity-70 group-hover:opacity-100 text-3xl'}/> :
                    <AiFillPlusCircle className={'text-orange-500 opacity-70 group-hover:opacity-100 text-3xl'}/>}
                {isAddingForm ?
                    <div className={'text-red-500 opacity-70 group-hover:opacity-100'}>Cancel</div> :
                    <div className={'text-orange-500 opacity-70 group-hover:opacity-100'}>Add item...</div>}
            </button>
            {isAddingForm && <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col gap-2 mx-4'}>
                <div className={'flex flex-col gap-1'}>
                    <input className={'bg-white rounded-xl  py-4 px-4'}
                           placeholder={"Name"}  {...register("name", {required: true})} />
                    {errors.name &&
                        <span className={'text-red-500 opacity-70 text-sm'}>You must fill in the name</span>}
                </div>
                <div className={'flex flex-col gap-1'}>
                    <input type={'datetime-local'} className={'bg-white rounded-xl py-4 px-4'}
                           placeholder={"Time"} {...register("dateTime", {required: true})} />
                    {errors.dateTime &&
                        <span className={'text-red-500 opacity-70 text-sm'}>You must fill in the time</span>}
                </div>
                <input className={'bg-orange-500 opacity-70 rounded-xl py-4 text-white'} type="submit" value={"Add"}/>
            </form>}
        </div>
    );
};

export default TodoListItems;
