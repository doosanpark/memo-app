import React, {useState} from 'react';
import "../css/Main.css"


function Main() {
    const [textList, setTextList] = useState(
        []
    );

    function addContent() {
        setTextList([textList,
            <div className={"Main__Container"}>
                <div className={"Container_head"} >
                    <div style={{fontSize: "15px"}}>
                        카테고리
                    </div>
                    <div style={{fontSize: "15px"}}>
                        등록일
                    </div>
                </div>
                <div className={"Container_body"} >
                    <div>
                        글 제목
                    </div>
                    <div style={{fontSize: "15px"}}>
                        작성자
                    </div>
                </div>
            </div>
        ])
    }

    return (
        <div className={"Content"}>
            {textList}
            <button className={"Main__Float_btn"} onClick={addContent}> +</button>
        </div>
    )
}

export default Main;