import { PageHeader } from "../../components/PageHeader/page_header"
import { ThemeContext } from "../../context/theme-context";
import { useContext } from "react";
import  Page  from "../../components/Page/page";

export const ContactPage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Page label="Contact">
           
        </Page>
    )
}