import { screen, fireEvent, waitFor } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';
import { render } from 'helper/test-utils';
import { RegisterPage } from '../RegisterPage';
import { validProps, badProps, emptyProps, RegisterResponse } from '../mocks/registrerData';

describe('Register Page', () => {
    it('should have valid request', async () => {
        render(<RegisterPage {...validProps} />);

        const nameInput = screen.getByLabelText('First Name');
        const submit = screen.getByRole('button');

        // Fire the event so dirty become false
        fireEvent.change(nameInput, { target: { value: 'test' } });
        fireEvent.click(submit);

        await waitFor(() => {
            mockAxios.mockResponse(RegisterResponse);
        });

        await waitFor(() => {
            expect(mockAxios.request).toHaveBeenCalledWith({
                data: RegisterResponse.data.user,
                method: 'POST',
                url: 'register',
            });
        });
    });

    it('submit should not be disabled if values is ok', async () => {
        render(<RegisterPage {...validProps} />);

        const nameInput = screen.getByLabelText('First Name');
        const submit = screen.getByRole('button');

        // Fire the event so dirty become false
        fireEvent.change(nameInput, { target: { value: 'test' } });

        await waitFor(() => {
            expect(submit).not.toBeDisabled();
        });
    });

    it('submit should be disabled if values is bad', async () => {
        render(<RegisterPage {...badProps} />);

        const nameInput = screen.getByLabelText('First Name');
        const submit = screen.getByRole('button');

        // Fire the event so dirty become false
        fireEvent.change(nameInput, { target: { value: 'test' } });

        await waitFor(() => expect(submit).toBeDisabled());
    });

    it('should display error message in not valid cases', async () => {
        render(<RegisterPage {...badProps} />);

        const emailInput = screen.getByLabelText('Email');
        const passwordInput = screen.getByLabelText('Password');
        const confirmPasswordInput = screen.getByLabelText('Confirm Password');

        // Fire the event's
        fireEvent.blur(emailInput);
        fireEvent.blur(passwordInput);
        fireEvent.blur(confirmPasswordInput);

        await waitFor(() => {
            expect(
                screen.getByText(/The email should look like example@domain.ua/i),
            ).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(
                screen.getByText(
                    /Password must contain at least one capital letter and at least one number/i,
                ),
            ).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.getByText(/Password does not match/i)).toBeInTheDocument();
        });
    });
});

it('submit should display "Required" message', async () => {
    render(<RegisterPage {...emptyProps} />);

    const emailInput = screen.getByLabelText('Email');
    const nameInput = screen.getByLabelText('First Name');
    const surnameInput = screen.getByLabelText('Surname');
    const passwordInput = screen.getByLabelText('Password');
    const dateInput = screen.getByLabelText('Choose date');

    // Fire the event's
    fireEvent.blur(emailInput);
    fireEvent.blur(nameInput);
    fireEvent.blur(surnameInput);
    fireEvent.blur(passwordInput);
    fireEvent.blur(dateInput);

    await waitFor(() => expect(screen.getAllByText(/Required/i).length).toBe(5));
});

it('submit redirect to dashboard if isAuthorized true', async () => {
    const preloadedState = {
        user: { isAuthorized: true },
        loading: { requests: new Set() },
    };

    const { history } = render(<RegisterPage {...validProps} />, { preloadedState });

    await waitFor(() => expect(history.location.pathname).toBe('/dashboard'));
});
