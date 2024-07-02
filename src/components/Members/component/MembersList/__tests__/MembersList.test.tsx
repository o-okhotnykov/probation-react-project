import { screen, fireEvent, within, waitFor } from '@testing-library/react';
import { render } from 'helper/test-utils';
import mockAxios from 'jest-mock-axios';
import { MembersList } from '../MembersList';
import { getUsers, getUserPage2 } from '../mocks/mockData';

describe('MemberList Component', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('should render api response', async () => {
        render(<MembersList />);

        await waitFor(() => {
            mockAxios.mockResponse(getUsers);
        });

        expect(await screen.findByText('oleksandr.okhotnykov@nure.ua')).toBeDefined();
    });

    it('should execute correct request on pagination click', async () => {
        render(<MembersList />);

        await waitFor(() => {
            mockAxios.mockResponse(getUsers);
        });

        fireEvent.click(screen.getByLabelText('Go to next page'));

        expect(mockAxios.request).toHaveBeenCalledWith(
            expect.objectContaining({ params: { _limit: 10, _page: 2 } }),
        );
    });

    it('should render correct data after on second page', async () => {
        render(<MembersList />);

        await waitFor(() => {
            mockAxios.mockResponse(getUsers);
        });

        fireEvent.click(screen.getByLabelText('Go to next page'));

        await waitFor(() => {
            mockAxios.mockResponse(getUserPage2);
        });
        const { data } = getUserPage2;
        const rows = await screen.findAllByRole('row');

        data.forEach(({ email, name }, index) => {
            expect(within(rows[index + 1]).getByText(email)).toBeInTheDocument();
            expect(within(rows[index + 1]).getByText(name)).toBeInTheDocument();
        });
    });

    it('should date be in correct format', async () => {
        render(<MembersList />);

        await waitFor(() => {
            mockAxios.mockResponse(getUserPage2);
        });

        const { data } = getUserPage2;
        const rows = await screen.findAllByRole('row');

        data.forEach((user, index) => {
            expect(within(rows[index + 1]).getByText('03-04-2022')).toBeInTheDocument();
        });
    });
});
