import ButtonAppBar from '../../components/ui/Appbar'
import SignIn from '../../components/ui/Signin'

function Home() {
    return (
        // Using MUI, create a title of our app that says "Tiny Title Tinder"
        <div>
            <ButtonAppBar />
            <SignIn></SignIn>
        </div>
    )
}

export default Home
