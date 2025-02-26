import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/page-elements/header';
import { PageLinks } from '@/components/page-elements/page-links';

// filepath: /Users/andrewziehl/Work/personalsite/src/components/page-elements/header.test.tsx

describe('Header Component', () => {
    const menuTitle = "Test Menu";

    test('renders Header component correctly', () => {
        render(<Header menuTitle={menuTitle} />);
        expect(screen.getByText(menuTitle)).toBeInTheDocument();
        PageLinks.forEach(link => {
            expect(screen.getByText(link.label)).toBeInTheDocument();
        });
    });

    test('toggles Drawer when Burger is clicked', () => {
        render(<Header menuTitle={menuTitle} />);
        const burgerButton = screen.getByRole('button');
        fireEvent.click(burgerButton);
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        fireEvent.click(burgerButton);
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    test('sets link as active and closes Drawer on link click', () => {
        render(<Header menuTitle={menuTitle} />);
        const burgerButton = screen.getByRole('button');
        fireEvent.click(burgerButton);
        const firstLink = screen.getByText(PageLinks[0].label);
        fireEvent.click(firstLink);
        expect(firstLink).toHaveAttribute('data-active', 'true');
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
});