import React, { useState, useEffect } from 'react'

export const Loading = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
    }, [])
    return(
        <div className={`preloader ${!isLoading ? "is-hide" : ""}`}>
            <svg className="preloader--svg">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">Mangrove Digital</text>
            </svg>
        </div>
    )
}