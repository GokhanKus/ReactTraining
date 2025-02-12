import React from 'react'
import useCopyToClipboard from './useCopyToClipboard'

function UseCopyHook() {
    const [copied, copy] = useCopyToClipboard("kopyalanan metin");
    return (
        <div>
            {
                copied && 'kopyalandi'
            }
            <button onClick={copy}>Kopyala</button>
        </div>
    )
}

export default UseCopyHook