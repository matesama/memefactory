import {useState} from 'react';

const Upload = () => {
    const [selectImg, setSelectImg] = useState(null);

    const handleImgChange = (event) => {
        const file= event.target.files[0];
        if (file) {
            setSelectImg(file);
        }
    }


    return (
        <div>
            <input type='file' accept='image' onChange={handleImgChange} />
            
            {selectImg && (
                <div>
                    <img src={ URL.createObjectURL(selectImg)} alt='selectImage' />
                </div>
                )}
            
            
        </div>
    );
}

export default Upload;