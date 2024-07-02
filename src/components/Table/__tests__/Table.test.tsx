import { screen, fireEvent, within } from '@testing-library/react';
import { render } from 'helper/test-utils';
import { TableComponent } from '../Table';
import { columns, userProps } from '../mocks/mockData';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useHistory: () => ({
            push: mockPush,
        }),
    };
});

describe('Table Component', () => {
    it('should correct sort after click on tHead', () => {
        render(<TableComponent {...userProps} />);
        const title = screen.getByText('Name');
        let cells = screen.getAllByRole('cell');

        //Check if Bob at 1 row
        expect(within(cells[0]).getByText('Bob')).toBeInTheDocument();

        fireEvent.click(title);
        cells = screen.getAllByRole('cell');

        //Check if Alex at 1 row
        expect(within(cells[0]).getByText('Alex')).toBeInTheDocument();
    });

    it('should correct icon after sort', async () => {
        render(<TableComponent {...userProps} />);

        const [title] = await screen.findAllByRole('columnheader');
        fireEvent.click(title);
        const iconUp = await screen.findByTestId('ArrowDropUpIcon');
        expect(iconUp).toBeInTheDocument();
    });

    it('should be correct class if isDetailedPage true', async () => {
        render(<TableComponent data={userProps.data} columns={columns} isDetailedPage={true} />);
        const cells = screen.getAllByRole('cell');
        fireEvent.click(within(cells[0]).getByText('Bob'));

        expect(mockPush).toHaveBeenCalledWith('/projects/1');
    });
});
