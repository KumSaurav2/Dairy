import { useContext } from "react";
import Form from "../form/Form";
import { PopUpContext } from "../context/PopUpContex";


const PopUpForm = () => {
    const {ToggleForm, trigger} = useContext(PopUpContext);
    const handleOpenClick = () => {
        ToggleForm();
    }
    const handleCloseClick = () => {
        ToggleForm();
    }

    return (trigger) ? (  
        <div className="pop-up">
            <div className="pop-up-inner">
                <h3>Today's Happenings</h3>
                <button onClick={handleCloseClick}>✘</button>
                    <Form />
            </div>
        </div>
    ) : (
        <div className="buttonDiv">
            <button onClick={handleOpenClick}><h4>CREATE</h4></button>
        </div>
    );
}
 
export default PopUpForm;