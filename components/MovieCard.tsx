import React from 'react'

interface MovieCardProps {
    data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    return (
        <div className="group bg-zing-900 col-span relative h-[12vw]">
            <img 
                src={data.thumbnailUrl}
                alt="Thumbnail"
                className="
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    rounded-md
                    group-hover:opacity-90
                    sm:group-hover:opacity-0
                    delay-300
                    w-full
                    h-[12vw]
                "
            />
        </div>
    )
}

export default MovieCard