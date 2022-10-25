import "./spinner.scss";

function Spinner(){
    return (
        <div className="spinner d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}

export default Spinner;