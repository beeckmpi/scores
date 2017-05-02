import React from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../common/Constants';
import style from './todo.styl';
import Todo from './Todo';
const TodoContainerSource = {
  drop(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

const TodoContainer = (props) => {
  const {connectDropTarget, isOver, todos} = props;
  return connectDropTarget(
    <div  style={{padding: "10px 0px"}}>
      {todos.map((t, i) =>
      <Todo id={t._id} message={t.message} finished={t.finished} key={i} />)}
    </div>
  );
};

TodoContainer.propTypes = {
  isOver: React.PropTypes.bool.isRequired,
  todos: React.PropTypes.array.isRequired,
};

export default DropTarget(ItemTypes.TODO, TodoContainerSource, collect)(cssModules(TodoContainer, style, { allowMultiple: true }));
