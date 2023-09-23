import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Ooops!!</h2>
            <Link className="btn btn-success" to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;