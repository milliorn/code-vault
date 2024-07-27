import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

/*
Create a constructor for this component.
Inside, set this.state to { userData: null },
which will represent a profile with no user data loaded.
Don’t forget to call super(props)!

Create a new method called loadUserData() that does two things:
Sets the userData state to null while the data is loading.
Once it’s loaded (in the next step), we’ll update it.
Fetches the user data with fetchUserData.

Now that we have a method for loading user data, let’s call it when the component mounts.
Add a lifecycle method for when the component mounts, and call this.loadUserData() inside.

We’re now loading user data,
but we aren’t displaying it anywhere because we haven’t updated the render() method.
The first thing we’ll need to change is isLoading.
It shouldn’t always be true—it should only be true when this.state.userData === null.
Update isLoading to reflect that.

Inside of render(), create a new variable called name.
If isLoading is true, set name to a sample value,
such as 'Loading...'. (The exact string is up to you.)
Otherwise, set name to this.state.userData.name.
Finally, replace “Name goes here” with {name}.

Inside of render(), create a new variable called bio.
When isLoading is true, set bio to a sample value.
Otherwise, set bio to this.state.userData.bio.
Finally, replace “Bio goes here” with {bio}.

Create a new variable called friends inside render().
When the component is loading, friends should be the empty array ([]).
Otherwise, it should be this.state.userData.friends.
Next, update the usernames prop of the <Userlist> component.
It’s currently an empty array—change it from {[]} to {friends}.

The last thing we’ll do is update the user’s profile picture.
Find the <div> with the class name of profile-picture.
We’ll want to put the following inside, but only if isLoading is false:

Add a lifecycle method for when the component unmounts, and call cancelFetch(this.fetchID) inside.

Add a lifecycle method for when the component updates.
If the username has changed (in other words, if this.props.username !== prevProps.username),
we should do two things:
Cancel the fetch currently in progress with cancelFetch(this.fetchID).
Call this.loadUserData() again.

*/

export class Profile extends React.Component {
    /*
    Constructor is the only place where you should assign this.state directly.
    In all other methods, you need to use this.setState() instead.
    */
    constructor(props) {
        super(props);
        this.state = { userData: null };
    }

    loadUserData() {
        this.setState({ userData: null })
        this.fetchID = fetchUserData(this.props.username, (userData) => {
            this.setState({ userData });
        });
    }

    componentDidMount() {
        this.loadUserData();
    }

    componentWillUnmount() {
        cancelFetch(this.fetchID);
    }

    componentDidUpdate(prevProps) {
        if (this.props.username !== prevProps.username) {
            cancelFetch(this.fetchID);
            this.loadUserData();
        }
    }

    render() {
        //const isLoading = null;
        const isLoading = this.state.userData === null ? true : false;

        let friends = isLoading ? [] : this.state.userData.friends;
        let bio = isLoading ? 'Loading...' : this.state.userData.bio;
        let name = isLoading ? 'Loading...' : this.state.userData.name;
        let className = 'Profile';

        if (isLoading) {
            className += ' loading';
        }

        return (
            <div className={className}>
                <div className="profile-picture">
                    {!isLoading && (
                        <img src={this.state.userData.profilePictureUrl} alt="" />
                    )}
                </div>
                <div className="profile-body">
                    <h2>{name}</h2>
                    <h3>@{this.props.username}</h3>
                    <p>{bio}</p>
                    <h3>My friends</h3>
                    <Userlist usernames={friends} onChoose={this.props.onChoose} />
                </div>
            </div>
        );
    }
}