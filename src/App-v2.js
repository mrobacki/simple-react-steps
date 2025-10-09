import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App2() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  const message = messages[step - 1];

  function showHideSteps() {
    setIsOpen((is) => !is);
  }

  return (
    <div class="container">
      {isOpen ? (
        <button className="close" onClick={showHideSteps}>
          &times;
        </button>
      ) : (
        <button className="close open" onClick={showHideSteps}>
          &#43;
        </button>
      )}

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <Message step={step}>{message}</Message>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              <span>👉</span>Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}: </h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
