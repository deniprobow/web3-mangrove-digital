
import Link from "next/link"

interface CardGalleryProps {
    link : string,
    img : string,
    title : string,
    metas : {
        text : string
    }[]
}

export const CardGallery = ({img, title, metas, link, ...props}: CardGalleryProps) => {
    return (
        <a className="card-gallery" href={link} data-fancybox="gallery">
            <img src={img} alt="" />
            <div className="card-gallery--text">
                <h5>{title}</h5>
                <ul>
                    {
                        metas.map((meta) => {
                            return (
                                <li>{meta.text}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </a>
    )
}