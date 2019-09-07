class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <br />
                    <span className="pull-right"><a onClick={this.logout}>Log out</a></span>
                    <h2> Mocha </h2>
                    <p> Love Mocha !!! </p>
                    <div className="row">
                        {this.state.jokes.map(function (joke, i) {
                            return (<Joke key={i} joke={joke} />);
                        })}
                    </div>
                </div>
            </div>
        )

    }
}