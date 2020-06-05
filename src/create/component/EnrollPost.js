import axios from 'axios';

function EnrollPost(props) {
    /*console.log("props", props.title);*/
    axios.put('http://localhost:3001/create', {
        /*body: JSON.stringify(props)*/
        title: props.title,
        category: props.category,
        content: props.content
    }).then(response => {
        console.log("res", response)
        this.setState({
            res: response
        })
    }).catch(function (error) {
        console.log(error);
    });
}

export default EnrollPost;