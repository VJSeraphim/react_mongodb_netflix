import React from "react"

import { isEmpty } from "lodash"

interface MovieListProps {
    data: Record<string, any>[],
    title: string
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
    if(isEmpty(data)) {
        return null
    }

    return (
        
    )
}

export default MovieList