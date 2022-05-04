import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This page you are looking for cannot be found</p>
            <Link to="/">Go back to Home Page...</Link>
        </div>
     );
}
 
export default NotFound;