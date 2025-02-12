import React, { useState } from 'react'

function useToggle() {

    const [open, setOpen] = useState(true);

    const change = () => {
        setOpen(!open);
    }

    return { open, change }
}

export default useToggle