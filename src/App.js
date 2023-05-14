import React, {useState} from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  rectSortingStrategy
} from '@dnd-kit/sortable';
import './App.css'
import {SortableItem} from './sortableItem';
import './util/util'

function App() {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState([1, 2, 3,4,5,6,7,8,9,10]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      
      <SortableContext 
        items={items}
        strategy={rectSortingStrategy}
      >
        <div className='container'>
          {items.map(id => <SortableItem key={id} id={id} />)}
        </div>
        
  
        {/* <DragOverlay>
            {activeId ? (
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "red"
                }}
              ></div>
            ) : null}
          </DragOverlay> */}
      </SortableContext>
     
      
    </DndContext>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  };
  
  function handleDragEnd(event) {
    setActiveId(null);
    const {active, over} = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

export default App