class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: ""
        }
        this.like = this.like.bind(this);
        this.serverRequest = this.serverRequest.bind(this);
    }

    like() {
        let joke = this.props.joke;
        this.serverRequest(joke);
    }

    serverRequest(joke) {
        $.post(
            "http://localhots:3000/api/jokes/like/" + joke.id,
            { like: 1 },
            res => {
                console.log("res...", res);
                this.setState({ liked: "Liked!", jokes: res});
                this.props.jokes = res;
            }
        );
    }

    render() {
        return (
            <div className="col-xs-4">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    #{this.props.joke.id}
                    <span clsasName="pull-right">{this.state.liked}</span>
                    </div>

                    <div className="panel-body">
                        {this.props.joke.joke}
                    </div>
                    <div className="panel-footer">
                        {this.props.joke.likes} Likes &nbsp;
                        <a onClick={this.like} className="btn btn-default">
                            <span classname="glyphicon glyphicon-thubms-up"></span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}