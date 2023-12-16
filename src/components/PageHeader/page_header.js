import './styles.scss';

import { MainNav } from "../MainNav/main_nav";
import { ThemeButton } from '../ThemeButton/theme_button';
import { Link } from "react-router-dom";

export const PageHeader = () => {
    return (
        <header className="page-header">
            <Link to="/">
                <img
                    src="https://via.placeholder.com/50"
                    alt="Logo"
                />
            </Link>
        <MainNav />
        <ThemeButton />
        </header>
    )
}