import { useState } from 'react';

const useGlobalState = () => {
    const [ leftNavMenus, setLeftNavMenus ] = useState([]);

    function setLeftNavMenusHandler( leftNavMenus ) {
        setLeftNavMenus(leftNavMenus);
    }

    
    return {leftNavMenus, setLeftNavMenusHandler};
}

export default useGlobalState;