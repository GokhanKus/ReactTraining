import React from 'react'
import useToggle from './useToggle'

function UseToggleHook() {

    const { open, change } = useToggle();
    return (
        <div>
            {
                open &&
                <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>Kutu</div>
            }

            <button onClick={change}>{open ? 'Gizle' : 'Goster'}</button>
        </div>
    )
}

export default UseToggleHook