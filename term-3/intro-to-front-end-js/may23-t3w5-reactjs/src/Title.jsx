export default function Title (props) {
    return (
        <>
            <h1>The Fruit App!</h1>
            {
                props.loggedInUser ? <h3>Navbar with my account options</h3> : <h3>Navbar with log in and sign up options</h3>
            }
        </>
    )
}
