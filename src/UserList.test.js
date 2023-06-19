import {screen, render, within} from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
    const users = [
        {name: 'sylvia', email: 'sylvia@gmail.com'},
        {name: 'jack', email: 'jack@gmail.com'}
    ]
    render(<UserList users={users}/>)

    return {
        users,
    };
}

test('should render one row per user', () => {
    //render the component
    renderComponent();
    //find all the rows in the table
    //const rows = screen.getAllByRole('row');this will select 3 rows which includes header row

    //use data-testid
    const rows = within(screen.getByTestId('users')).getAllByRole('row')

    //eslint-disable-next-line
    // const rows = container.querySelectorAll('tbody tr')

    //assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('should render the name and email', () => {
    const {users} = renderComponent();

    for (let user of users) {
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email})

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }

});