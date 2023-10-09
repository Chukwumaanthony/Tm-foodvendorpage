import { useParams } from "react-router-dom";

export default function Menuview() {
  const { id } = useParams();
  return (
    <div className="params">
      <h2>{id}</h2>
    </div>
  );
}
