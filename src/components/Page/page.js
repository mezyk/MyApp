import React, { useContext } from "react";
import { PageHeader } from "../../components/PageHeader/page_header";
import { ThemeContext } from "../../context/theme-context";

const Page = ({ label, children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="container">
            <PageHeader />
            <h1 style={{ backgroundColor: theme.background, color: theme.foreground }}>{label}</h1>
            {children}
            Test treści
        </div>
    );
};

export default Page;