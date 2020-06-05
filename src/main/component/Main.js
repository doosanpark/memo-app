import React, {useEffect, useState} from 'react';
/*import React, {Component} from 'react';*/
import "../css/Main.css"
import {Link} from "react-router-dom";
import axios from 'axios';

/*
class Main extends Component {
    state = {
            memberList: [],
            id: 1
    }

    addMain__Content = () => {
        this.setState({
            memberList: [
                ...this.state.memberList, // ...을 이용하면 이전에 map에 저장된 것 그대로 다시 저장함.
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
            <div className={"Main__Content"}>
                {this.state.memberList}
                <button className={"Main__Float_btn"} onClick={this.addMain__Content}> +</button>
            </div>
        );
    }
}*/

function Main() {
    const [postList, setPostList] = useState(
        []
    );


    function getPostFromServer() {
        axios.get('http://localhost:3001/get')
            .then(function (response) {
                setPostList(response.data);
            }).catch(function (error) {
            console.log("getPost error", error);
        });
    }

    useEffect(() => {
        getPostFromServer();
    }, [])
/*
    function addMain__Content() {
        setMemberList([memberList,

        ])
    }*/
    function getPostList() {
        console.log("postList", postList);
        return (
            postList.map((data) =>
                <div className={"Main__Container"}>
                    <div className={"Container_head"}>
                        <div style={{fontSize: "15px"}}>
                            {data.category}
                        </div>
                        <div style={{fontSize: "15px"}}>
                            {data.reg_date}
                        </div>
                    </div>
                    <div className={"Container_body"}>
                        <div>
                            {data.title}
                        </div>
                        <div style={{fontSize: "15px"}}>
                            {data.nickname}
                        </div>
                    </div>
                </div>
            )
        )
    }
    return (
        <div className={"Main__Content"}>
            {
                getPostList()
            }
            <Link to = {"/create"}>
                <button className={"Main__Float_btn"} > +</button>
            </Link>
        </div>
    )
}

export default Main;