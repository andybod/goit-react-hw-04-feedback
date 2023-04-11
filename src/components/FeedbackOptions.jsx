import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className="btns">
        {options.map(opt => (
          <button
            key={opt}
            onClick={() => onLeaveFeedback(opt)}
            className="btn"
            name={opt.toLowerCase()}
          >
            {opt}
          </button>
        ))}
      </div>
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
