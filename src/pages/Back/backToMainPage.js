import { PageHeader } from "../../components/PageHeader/page_header"
import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import Page from "../../components/Page/page";
import { Link } from "react-router-dom";

export const BackToMainPage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Page label="Back">
            <Link to="/">
                <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"

                />
            </Link>
        </Page>
    )
}