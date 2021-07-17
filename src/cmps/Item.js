import pdf from '../icons/pdf.png'
import video from '../icons/video.png'
import photo from '../icons/photo.png'
import { useEffect, useState } from 'react';
export default function Item({ item, onOpenModal }) {


    const [fileSize, setFileSize] = useState(null)
    const [fileIcon, setFileIcon] = useState(null)
    // const [isModalOpen, setIsModalOpen] = useState(false)

    const getFileInfo = () => {
        if (item.mime === 'video/mp4') return (item.length + ' seconds')
        else if (item.mime === 'image/jpeg') return (item.height + 'x' + item.width + ' px')
        else return (item.pages + ' pages')
    }

    // const onOpenModal = () => {
    //     setIsModalOpen(!isModalOpen)
    // }

    useEffect(() => {
        console.log(item)
        if (item.mime === 'video/mp4') setFileIcon(video)
        else if (item.mime === 'image/jpeg') setFileIcon(photo)
        else setFileIcon(pdf)
    }, [])


    useEffect(() => {
        const size = item.size.toLocaleString("en-US")
        setFileSize(size)
    }, [])


    return (
        <div onClick={() => onOpenModal(item.name)} className="box">
            <img width="25px" height="25px" src={fileIcon} />
            <div className="inner">
                <span className="item-name"> {item.name}</span>
                <span className="file-length"> {getFileInfo()}</span>
            </div>
            <p className="file-size"> {fileSize}kB</p>
            {/* 
            {isModalOpen && <div className="modal">
                <img src={imgUrl+item.name}/>
            </div>} */}
        </div>
    )
}

//onClick={() => onDelete(task._id)}
