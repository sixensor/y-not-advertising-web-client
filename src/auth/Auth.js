import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom'


const DefaultLayout = React.lazy(() => import('../containers/DefaultLayout'));

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: undefined,
      role: 1,
    }
  }

  componentDidMount() {
    let session = localStorage.getItem('Session')
    if (!session) {
      this.props.history.push('/home');
    }
  }

  render() {
    if (this.state.session === undefined) {
      return (
        <section>
          <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>}/>
        </section>
      )
    }
    return (
      <section>{this.props.children}</section>
    )
  }
}
export default withRouter(Auth);
