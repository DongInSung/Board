import contentStyle from './Content.module.css';

import { Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import ImageUpload from './ImageUpload';
import ReduxStore from './ReduxStore';


function Content() {

    return (
        <div className={contentStyle.content}>

            <Routes>

                <Route path='/' element={null} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/board' element={<ImageUpload />} />
                <Route path='/store' element={<ReduxStore />} />

            </Routes>
            
        </div>
    )
}

export default Content;