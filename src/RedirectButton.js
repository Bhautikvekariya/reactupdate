import { useNavigate } from "react-router-dom";

function RedirectButton(){
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/about");
    };
    return <button onClick={handleClick}>
        Go to About page
    </button>;
}

export default RedirectButton;