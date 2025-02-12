import React, { useState } from 'react'

function useCopyToClipboard(text) {

    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(text)
            .then(() => setCopied(true))
            .catch(() => setCopied(false));
    }

    return [copied, copy];//bu seferde geriye obje yerine array donelim
}

export default useCopyToClipboard