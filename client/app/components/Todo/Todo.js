import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cssModules from 'react-css-modules';
import { DragSource, DropTarget } from 'react-dnd';
import { callRemoveTodo, callEditTodo } from './TodoAsyncActions';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import Paper from 'material-ui/Paper';
import style from './todo.styl';
import { ItemTypes } from '../../common/Constants';
const TodoSource = {
  beginDrag(props) {
    return {};
  },
};
const TodoContainerSource = {
  drop(props) {
    return {};
  }
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

function collect2(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

const TodoItem = (props) => {
  const { id, finished, message, dispatchCallRemoveTodo, dispatchCallEditTodo, connectDragSource, isDragging, connectDropTarget, isOver} = props;
  const handleRemove = () => {
    dispatchCallRemoveTodo(id);
  };
  const handleEdit = () => {
    dispatchCallEditTodo(id, !finished);
  };
  const finishedClass = () => {
    if (finished) {
      return 'todo-item todo-finished';
    }
    return 'todo-item';
  };
  return connectDragSource(connectDropTarget(
    <div>
      <Paper styleName={finishedClass()} zDepth={1}>
        <Checkbox defaultChecked={finished || false} onCheck={handleEdit} label={message}/>
        <Delete onClick={handleRemove} styleName="delete" />
      </Paper>
    </div>
  ));
};

TodoItem.propTypes = {
  message: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  finished: React.PropTypes.bool,
  dispatchCallRemoveTodo: React.PropTypes.func.isRequired,
  dispatchCallEditTodo: React.PropTypes.func.isRequired,
  connectDragSource: React.PropTypes.func.isRequired,
  connectDropTarget: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired,
  isOver: React.PropTypes.bool.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  dispatchCallRemoveTodo: _id => dispatch(callRemoveTodo(_id)),
  dispatchCallEditTodo: (_id, finished) => dispatch(callEditTodo(_id, finished)),
});
export default compose(DragSource(ItemTypes.TODO, TodoSource, collect2), DropTarget(ItemTypes.TODO, TodoContainerSource, collect), connect(mapStateToProps, mapDispatchToProps))(cssModules(TodoItem, style, { allowMultiple: true }));
