import QuestionItem from "./question-item";

function SomeQuestions() {
  const questions = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        " Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam",
    },
  ];
  return (
    <div className="some-questions-about-bookmark">
      {questions.map(function (question) {
        return <QuestionItem question={question.question} />;
      })}
      <div className="more-info-button">
        <button>More Info</button>
      </div>
    </div>
  );
}

export default SomeQuestions;
