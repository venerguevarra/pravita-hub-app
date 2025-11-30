import { Menu, NavLink } from "@mantine/core";

export const MainHeaderMenu = (): React.JSX.Element => {
    return (
        <nav className="main-header-nav" aria-label="Main navigation">
            {/* Simple top-level link */}
            <NavLink label="Menu 1" className="main-header-navlink" variant="subtle" active />

            {/* Dropdown menu with sub-items */}
            <Menu withinPortal position="bottom-start" offset={4}>
                <Menu.Target>
                    <button type="button" className="main-header-menu-trigger">
                        Menu 2 ▾
                    </button>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Section 1</Menu.Label>
                    <Menu.Item>Sub menu 1</Menu.Item>
                    <Menu.Item>Sub menu 2</Menu.Item>

                    <Menu.Divider />

                    <Menu.Label>Section 2</Menu.Label>
                    <Menu.Item>Sub menu 3</Menu.Item>
                    <Menu.Item>Sub menu 4</Menu.Item>

                    <Menu.Divider />

                    <Menu.Item>Sub menu 5</Menu.Item>
                </Menu.Dropdown>
            </Menu>

            {/* Another dropdown menu */}
            <Menu withinPortal position="bottom-start" offset={4}>
                <Menu.Target>
                    <button type="button" className="main-header-menu-trigger">
                        Menu 3 ▾
                    </button>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Item>Sub menu 1</Menu.Item>
                    <Menu.Item>Sub menu 2</Menu.Item>
                    <Menu.Item>Sub menu 3</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </nav>
    );
};
