/*import React, {useState} from 'react';*/
import React, {Component} from 'react';
import "../css/Main.css"
import {Link} from "react-router-dom";

/*
class Main extends Component {
    state = {
            textList: [],
            id: 1
    }

    addContent = () => {
        this.setState({
            textList: [
                ...this.state.textList, // ...을 이용하면 이전에 map에 저장된 것 그대로 다시 저장함.
                                        // 그리고 , 다음에 있는 것들을 추가.
                <div className={"Main__Container"}>
                    <div className={"Container_head"}>
                        <div style={{fontSize: "15px"}}>
                            카테고리
                        </div>
                        <div style={{fontSize: "15px"}}>
                            등록일
                        </div>
                    </div>
                    <div className={"Container_body"}>
                        <div>
                            글 제목
                        </div>
                        <div style={{fontSize: "15px"}}>
                            작성자
                        </div>
                    </div>
                </div>
            ]
        })
    }

    render() {
        console.log("render ");
        return (
            <div className={"Content"}>
                {this.state.textList}
                <button className={"Main__Float_btn"} onClick={this.addContent}> +</button>
            </div>
        );
    }
}*/

function Main() {
    const [textList, setTextList] = useState(
        []
    );

    function addContent() {
        setTextList([textList,
            <div className={"Main__Container"}>
                <div className={"Container_head"}>
                    <div style={{fontSize: "15px"}}>
                        카테고리
                    </div>
                    <div style={{fontSize: "15px"}}>
                        등록일
                    </div>
                </div>
                <div className={"Container_body"}>
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
            <Link to = {"/create"}>
                <button className={"Main__Float_btn"} > +</button>
            </Link>
        </div>
    )
}

export default Main;