import { useEffect, useState } from 'react';
import testStyle from './ImageUpload.module.css';
import { customAxios } from '../axios/Axios';

export default function ImageUpload() {

    const [postImges, setPostImgs] = useState([]);
    const [previewImgs, setPreviewImgs] = useState([]);


    const handleUploadImg = (event) => {

        const loadedFiles = event.target.files;
        
            
        if (loadedFiles.length > 3) {
            alert("최대 3개까지 업로드 가능합니다.");
            return;
        }

        const loadedImgs = [];
        Object.keys(loadedFiles).forEach(file => {
            loadedImgs.push(loadedFiles[file]);
        });

        for (let img of loadedImgs) {
            if (img.type.slice(0, 5) !== "image") {
                alert("이미지 파일만 업로드 가능합니다.");
                return;
            }
        }

        setPreviewImgs([]);
        setPostImgs([loadedImgs]);
        
        loadedImgs.forEach(img => {
            const fd = new FileReader();
            fd.readAsDataURL(img);
            fd.onloadend = () => {
                const previewImgUrl = fd.result;
                setPreviewImgs(imgs => [...imgs, previewImgUrl]);
            }
        });
    }

    const clearImgs = () => {
        setPreviewImgs([]);
        setPostImgs([]);
    }

    const postServer = async () => {
        
        const userData = new Map([
            ["id", "test"],
            ["pw", "test"]
        ]);
        const postData = Object.fromEntries(userData);

        const file = new FormData();

        Object.keys(postImges[0]).forEach((x, i) => {
            file.append(`image${i + 1}`, postImges[0][x]);
        });

        file.append("userData", new Blob([JSON.stringify(postData)],  {type: "application/json"} ));

        

        const result = await customAxios.post('/board', file);
        console.log(result);
    }


    return (

        <div className={testStyle.wrapper}>

            <div className={testStyle.showImgs}>
                <img src={previewImgs[0]} alt="Can't loading..." />
                <img src={previewImgs[1]} alt="Can't loading..." />
                <img src={previewImgs[2]} alt="Can't loading..." />
            </div>

            <div className={testStyle.handleImg}>
                <button onClick={clearImgs}>❌</button>
                <label htmlFor='uploadImg'>이미지 등록</label>
                <input className={testStyle.hidden}
                    id='uploadImg'
                    type='file' accept='image/*' multiple
                    onChange={handleUploadImg}
                    onClick={(event) => event.target.value = null}
                    
                     />
                
                {postImges.length === 0 ? null : <button onClick={postServer}>서버에 전송!</button>}
                
            </div>

        

        </div>

    )
}


