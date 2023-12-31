import { PREMISE, QUESTIONS } from "../data";

export default function Page() {
  return (
    <>
      {PREMISE}
      <form action="/quiz/result">
        {QUESTIONS.map(({ id: questionId, question, answers }) => (
          <fieldset key={questionId} className="mt-5">
            <legend>
              {questionId}
              {")"} {question}
            </legend>
            {answers.map(({ id: answerId, answer, type }) => (
              <div key={answerId}>
                <input
                  id={answerId}
                  type="radio"
                  name={questionId}
                  value={type}
                />
                <label htmlFor={answerId}> {answer}</label>
              </div>
            ))}
          </fieldset>
        ))}
        <div className=" flex justify-center mt-5">
          <button className="bg-blue-700 text-white p-2">Submit</button>
        </div>
      </form>
    </>
  );
}
