import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

function Esquerda() {
  return (
    <div className="esquerda">
      <Stories />
      <Posts />
    </div>
  );
}

export default function Corpo() {
  return (
    <div className="corpo">
      <Esquerda />
      <Sidebar />
    </div>
  );
}
