import logo from './logo.svg'

export default function Footer (props) {
    // // If we have data, it will show footer. Otherwise the footer will not render. Used for no alternative option.
    // return props.dataFromApi && <footer>
    //     <img src={logo} alt="The React Logo" />
    //     <p>(c) Coder 2023 May Cohort</p>
    //     <a href="https://github.com/">The GitHub Repo</a>
    // </footer>

    // // For alternative option. Shows "Loading..." when data has not yet been received from API. Using ternary operator.
    // return props.dataFromApi ? <footer>
    //         <img src={logo} alt="The React Logo" />
    //         <p>(c) Coder 2023 May Cohort</p>
    //         <a href="https://github.com/">The GitHub Repo</a>
    //     </footer> : <p>Loading...</p>

    // For alternative option. Using short circuit logic. If data exists, it will return footer. If not, it will return second
    // option after the || OR, which is "Loading..."
    return (props.dataFromApi && <footer>
            <img src={logo} alt="The React Logo" />
            <p>(c) Coder 2023 May Cohort</p>
            <a href="https://github.com/">The GitHub Repo</a>
        </footer>) || <p>Loading...</p>
}