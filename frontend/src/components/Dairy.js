import { format } from 'date-fns';
import { useContext } from 'react';
import { DairyContext } from '../reducer/DairyReducer';

const DairyDetails = ({dailyDairy}) => {
    const date = new Date(dailyDairy.createdAt);
    const formattedDate = format(date, 'd MMMM');

    const {dispatch} = useContext(DairyContext);
    
    const handleDelete = async () => {
        const response = await fetch('https://dairy-1-miw6.onrender.com/api/dairy/' + dailyDairy._id, {
            method: 'DELETE'
        })

        const json = await response.json();
        if(response.ok) {
            console.log(json);
            dispatch({type:'DELETE', payload: json})
        }
    }
    return ( 
        <div className="dairyContent">
            <h3>{formattedDate}</h3>
            <h3 className='delete' onClick={handleDelete}><i class="fas fa-trash trash-icon"></i>
</h3>
            <div className="lev1">
                <p>{dailyDairy.content}</p>
            </div>
        </div>
     );
}
 
export default DairyDetails;