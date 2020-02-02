var contentnode = document.getElementById('contents');

class Home extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Romil Shah"
            ),
            React.createElement("img", { src: "./romilphoto.jpg", alt: "Head Shot" }),
            React.createElement(
                "p",
                null,
                "I am Romil Shah. I am a Graduate student at San Diego State University with major in Computer Science. I am happy that I took Modern Web Development Frameworks in first semester and looking forward to this course."
            ),
            React.createElement("br", null),
            React.createElement(
                "button",
                null,
                " ",
                React.createElement(
                    "a",
                    { href: "https://github.com/romilshah98/Assignment_1.git", target: "_blank" },
                    "VIEW MY GITHUB REPO"
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(Home, null), contentnode);