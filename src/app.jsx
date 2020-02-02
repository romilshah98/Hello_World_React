var contentnode = document.getElementById('contents');

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Romil Shah</h2>
                <img src="./romilphoto.jpg" alt="Head Shot"></img>
                <p>
                    I am Romil Shah. I am a Graduate student at San Diego State University with major in Computer Science. I am happy that I took Modern Web Development Frameworks in first semester and looking forward to this course.
                </p><br/>
                <button> <a href="https://github.com/romilshah98/Assignment_1.git" target="_blank">VIEW MY GITHUB REPO</a></button>
            </div>
        );
    }
}

ReactDOM.render(<Home />, contentnode);