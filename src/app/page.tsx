'use client'
import ListHeader from "@/components/ListHeader";
import TodoListItems, {TodoListItemsType, TodoListItemType} from "@/components/TodoListItems";
import {useState} from "react";

export default function Home() {
    const [todoListItems, setTodoListItems] = useState<TodoListItemsType>([
        {
            name: "Join standup",
            isCompleted: false,
            dateTime: "2024-06-01T09:00:00"
        },
        {
            name: "Code review",
            isCompleted: true,
            dateTime: "2024-06-01T11:00:00"
        }
    ])

    const handleAddItem = (item: TodoListItemType) => {
        setTodoListItems((prev) => [...prev, item])
    }

  return (
      <div className={'flex flex-col items-center mx-auto max-w-full md:max-w-1/2 lg:max-w-1/4'}>
          <ListHeader/>
          <TodoListItems items={todoListItems} onAddItem={handleAddItem}/>
          <div>to-do lists</div>
    </div>
  );
}
