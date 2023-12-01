import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function NumberGrabber() {
  const { banana, id, potato } = useParams();
  const navigate = useNavigate();

  function navigateToHome() {
    console.log("The logic that posts a message, submits a form or whatever");
    navigate("/");
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(
        "Simulating we're doing something. We will now redirect you."
      );
      navigate("/");
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>The number that this component grabbed is: {banana}</h1>
      <h1>And the ID is: {id}</h1>
      <h1>And don't forget the potato: {potato}</h1>
      <button
        onClick={() => {
          navigateToHome();
        }}
      >
        Return Home
      </button>
    </div>
  );
}
