import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function KanbanBoard() {
    const [completed, setCompleted] = useState([]);
    const [completed2, setCompleted2] = useState([]);
    const [incomplete, setIncomplete] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setIncomplete(json);
            });
    }, []);

    //   console.log(incomplete)

    const handleDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        console.log(result)
        if (source.droppableId == destination.droppableId) return;

        //REMOVE FROM SOURCE ARRAY

        if (source.droppableId == 1) {
            setIncomplete(removeItemById(draggableId, incomplete));

        } if (source.droppableId == 2) {
            setCompleted(removeItemById(draggableId, completed));
        }
        else {
            setCompleted2(removeItemById(draggableId, completed2));
        }

        // GET ITEM

        const task = findItemById(draggableId, [...incomplete, ...completed, ...completed2]);

        //ADD ITEM
        if (destination.droppableId == 2) {
            setCompleted([{ ...task, completed: !task.completed }, ...completed]);
        }
        if (destination.droppableId == 3) {
            setCompleted2([{ ...task, completed: !task.completed }, ...completed2]);
        }
        if (destination.droppableId == 1) {
            setIncomplete([{ ...task, completed: !task.completed }, ...incomplete]);
        }
    };

    function findItemById(id, array) {
        return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
        return array.filter((item) => item.id != id);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            
            <div className="flex lg:flex-row gap-y-10 flex-col justify-between items-center">
                <Column title={"TO DO"} tasks={incomplete} id={"1"} />
                <Column title={"DONE"} tasks={completed} id={"2"} />
                <Column title={"BACKLOG"} tasks={completed2} id={"3"} />
            </div>
        </DragDropContext>
    );
}