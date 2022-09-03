import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './features/curriculum/Header';

import { loadCurriculum, map_view }
    from './features/curriculum/curriculumSlice';


function App() {
    const dispatch = useDispatch(),
        view = useSelector(map_view);

    useEffect(() => {
        dispatch(loadCurriculum());
    });

    return (
        <div className={`App ${view}`} role="main">
            <Loader />
            <Header />
            <hr className="headerLongerLine" />
            <TabPanel />
        </div>
    );
}

export default App;
