
import Image from 'next/image';
import Link from 'next/link';

function ImageTitle({img,title}){
    return(
        <>

            <Link href={`/coursesbycategory/${title}`}>

       {/* <Link to={`/home/courses-by-category/${title}`} className="link-container-image-title" >   </Link> */}

            <Image src={img} alt={title} width={300} height={200} className='img-container-image-title'/>      
            <p className='title-container-image-title'>{title}</p>

            </Link>

        </>

       
    )
}
export default ImageTitle;