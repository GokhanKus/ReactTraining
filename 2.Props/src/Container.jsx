import React from 'react'

function Container({ children }) {
    return (
        <div>
            <div>Container Yapisi</div>
            <div>{children}</div>
        </div>
    )
}

export default Container

/* container comp icine bir comp daha cagirdik ve bu comp'u container compunun parametresinde yakalayip bunu children olarak destructed ettik(containerin childreni product componenti) daha sonra function container icindeki {children} kullandık o da Product componentine denktir */