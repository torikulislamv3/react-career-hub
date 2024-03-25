import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh Sorry .
                Your page not detected.....!
            </h1>

            <button>
                <Link to="/">Go Back Now!</Link>
            </button>
        </div>
    );
};

export default ErrorPage;