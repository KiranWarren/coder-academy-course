import { useParams } from "react-router-dom";

export default function NumberGrabber() {
  const { banana, id, potato } = useParams();

  return (
    <div>
      <h1>The number that this component grabbed is: {banana}</h1>
      <h1>And the ID is: {id}</h1>
      <h1>And don't forget the potato: {potato}</h1>
    </div>
  );
}
