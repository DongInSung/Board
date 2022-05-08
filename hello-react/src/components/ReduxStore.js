import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../store/store'

function ReduxStore() {

    const bucket = useSelector(state => state.bucket);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem("item"));
    }

    return (
        <div>

            <h3>Redux Store Test</h3>
            <button onClick={handleAddItem}>Add item</button>
        </div>
    )
}

export default ReduxStore;