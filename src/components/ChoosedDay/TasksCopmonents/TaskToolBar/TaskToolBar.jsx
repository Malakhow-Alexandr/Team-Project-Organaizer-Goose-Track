import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
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
import { deleteTask, changeTaskCategory } from 'redux/tasks/operations';
import { selectTasksSuccessful } from 'redux/tasks/selectors';
import { selectError } from 'redux/tasks/selectors';
import { Portal } from '../Portal/Portal';
import { usePopper } from 'react-popper';
import { correctToolBarTitle } from '../helper/helper';

const tostStyleError = {
  borderRadius: '8px',
  border: '1px solid red',
  background: '#13151A',
  color: '#3E85F3',
};

export const TasklToolBar = ({
  toolbarData,
  idData,
  item,
  handleShowModal,
  disableDrag,
  enableDrag,
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
    disableDrag();
  };

  const handleMoveCard = (id, value, date) => {
    if (successful) {
      dispatch(
        changeTaskCategory({
          id,
          category: value,
        })
      );

      setIsVisible(false);
      enableDrag();
    }
    if (error) {
      toast.error(`wrong category`, {
        style: tostStyleError,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    enableDrag();
  };

  const handleDeleted = id => {
    if (successful) {
      dispatch(deleteTask(id));
    }
    if (error) {
      toast.error(`Unable to find Task`, {
        style: tostStyleError,
      });
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
