import { useState, useContext } from 'react';
import { DairyContext } from '../reducer/DairyReducer';
import { PopUpContext } from '../context/PopUpContex';
const Form = () => {
    const {dispatch} = useContext(DairyContext);
    const { ToggleForm } = useContext(PopUpContext)
    const[content, setContent] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dairy = {content};
        const response = await fetch('https://dairy-1-miw6.onrender.com/api/dairy', {
            method: 'POST',
            body: JSON.stringify(dairy),
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        const json = await response.json()
        if(response.ok) {
            setContent('');
            ToggleForm()
            dispatch({type: 'CREATE', payload: json})
        }


    }
    return ( 
        <form onSubmit={handleSubmit} className='form'>
            <textarea 
                type='text' 
                onChange={(e) => setContent(e.target.value)} 
                value={content}
                className='form-input'
            />
            <button type='submit'><h4>ADD</h4></button>
        </form>
     );
}
 
export default Form;