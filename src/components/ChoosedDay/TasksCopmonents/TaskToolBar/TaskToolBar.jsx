import { useState, useEffect } from 'react';
import {
  BoxIconBth,
  IconBthArrow,
  IconBthPencil,
  IconBthTrash,
  Tooltip,
  TooltipButton,
  TooltipButtonItem,
} from './TaskToolBarStyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';
import { changeTaskCategory } from 'redux/tasks/operations';
import { selectTasksSuccessful } from 'redux/tasks/selectors';
import { selectError } from 'redux/tasks/selectors';
import { Portal } from '../Portal/Portal';
import { usePopper } from 'react-popper';
import { correctToolBarTitle } from '../helper/helper';

export const TasklToolBar = ({
  toolbarData,
  idData,
  item,
  handleShowModal,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const error = useSelector(selectError);
  const successful = useSelector(selectTasksSuccessful);
  const dispatch = useDispatch();

  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1440px)').matches
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: matches ? 'right-start' : 'bottom',
  });

  const handleOpenToolBar = () => {
    setIsVisible(true);
  };

  const handleMoveCard = (id, value) => {
    if (successful) {
      dispatch(
        changeTaskCategory({
          id: id,
          category: value,
        })
      );
      setIsVisible(false);
    }
    if (error) {
      alert(`wrong category`);
    }
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleDeleted = id => {
    if (successful) {
      dispatch(deleteTask(id));
    }
    if (error) {
      alert(`Unable to find Task`);
    }
  };

  useEffect(() => {
    window
      .matchMedia('(min-width: 1440px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  return (
    <div>
      <BoxIconBth onMouseLeave={handleMouseLeave}>
        <IconBthArrow
          ref={setReferenceElement}
          onClick={handleOpenToolBar}
          $isactive={isVisible}
        />
        <IconBthPencil onClick={() => handleShowModal(item)} />
        <IconBthTrash onClick={() => handleDeleted(idData)} />
        {isVisible && (
          <Portal>
            <Tooltip
              ref={setPopperElement}
              style={{
                ...styles.popper,
                top: matches ? '25px' : '10px',
                left: matches ? '-15px' : '',
              }}
              {...attributes.popper}
            >
              <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
                <TooltipButtonItem>
                  <TooltipButton
                    onClick={() => handleMoveCard(idData, toolbarData[0])}
                  >
                    {correctToolBarTitle(toolbarData[0])}
                    <IconBthArrow style={{ margin: '0', marginLeft: '8px' }} />
                  </TooltipButton>
                </TooltipButtonItem>
                <TooltipButtonItem>
                  <TooltipButton
                    onClick={() => handleMoveCard(idData, toolbarData[1])}
                  >
                    {correctToolBarTitle(toolbarData[1])}
                    <IconBthArrow style={{ margin: '0', marginLeft: '8px' }} />
                  </TooltipButton>
                </TooltipButtonItem>
              </ul>
            </Tooltip>
          </Portal>
        )}
      </BoxIconBth>
    </div>
  );
};
