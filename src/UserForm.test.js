import {render, screen} from "@testing-library/react"
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test('It shows two inputs and a submit button', () => {
    //render the component
    render(<UserForm/>)

    //manipulate the component or find an element in it
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //assertion - make sure the component is working

    //what we expect to do
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})

test('it calls onUserAdd when the form is submitted', async () => {
    //when mock func is called, it's going to have internal storage, it's keeping track of the fact is called.
    const mock = jest.fn();
    //render the component
    render(<UserForm onUserAdd={mock}/>)
    //find two inputs
    const nameInput = screen.getByRole('textbox', {
        name: /name/i,
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i,
    });
    //simulate typing in name input
    await user.click(nameInput);
    await user.keyboard('sylvia');
    //simulate typing in name input
    await user.click(emailInput);
    await user.keyboard('sylvia@gmail.com');
    //find the button
    const button = screen.getByRole('button');
    //simulate clicking the button
    await user.click(button);
    //assertion to make sure onUserAdd gets called with name/email
    expect(mock).toBeCalled();
    expect(mock).toBeCalledWith({name: 'sylvia', email: 'sylvia@gmail.com'});
})