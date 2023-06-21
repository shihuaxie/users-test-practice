import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {
    render(<App/>);
    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    })
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    })
    const button = screen.getByRole('button', {
        name: /add user/i
    })

    user.click(nameInput);
    user.keyboard('sylvia');
    user.click(emailInput);
    user.keyboard('sylvia@gmail.com');
    user.click(button);

    //screen.logTestingPlaygroundURL();

    const name = screen.getByRole('cell', {name: 'sylvia'});
    const email = screen.getByRole('cell', {name: 'sylvia@gmail.com'});

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});
