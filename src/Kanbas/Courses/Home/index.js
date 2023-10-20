import ModuleList from "../Modules/ModuleList";
import RightPanel from "./RightPanel";


function Home() {
  return (
    <div className="row">
      <h2>Home</h2>
      <ModuleList />
      <RightPanel/>
    </div>
  );
}
export default Home;