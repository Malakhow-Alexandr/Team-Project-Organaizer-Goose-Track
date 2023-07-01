export const ReviewFeedbackComponent = ({feedbackMessage, handleTextareaChange}) => {
  return (
    <>
      <label>
        <textarea name="text" placeholder="Enter text" value={feedbackMessage} onChange={handleTextareaChange}/>
      </label>
    </>
  );
};
