import ModuleList from "./ModuleList";
function Modules() {
    return (
        <div>
            <button className="btn btn-light float-start">Collapse All</button>
            <button className="btn btn-light float-start">View Progress</button>
            <select className="form-select float-start" id="publish" style={{ width: "200px" }}>
                <option value="PONE">Publish Closest Due</option>
                <option value="PSEL">Publish Selected</option>
                <option selected value="PALL">
                    Publish All</option>
            </select>
            <button className="btn btn-danger float-start">Module</button>
            <br />
            <br />
            <hr />
            <ModuleList />
        </div>
    );
}
export default Modules;