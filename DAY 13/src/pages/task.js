function Task(){
    let name="hello";
    const handleReactInput=(e)=>{
        name=e.target.value;
        console.log(name);

    }
    return(
        <div className="task">
        <h4>this is a task page</h4>
        <input className="input" onchange={handleReactInput}/>
        </div>
    );
}
export default Task