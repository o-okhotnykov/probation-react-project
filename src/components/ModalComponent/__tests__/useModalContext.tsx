import { render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useModal } from '../useModal';
import { ModalProvider, useModalContext } from '../useModalContext';

const renderContext = ({ noWrapper } = { noWrapper: true }) => {
    return renderHook(() => useModalContext(), {
        ...(noWrapper && { wrapper: ModalProvider }),
        initialProps: {
            isOpen: false,
            handleToggle: () => true,
        },
    });
};

const TestComponent = () => {
    return <div>body</div>;
};

describe('useModalContext', () => {
    it('should local to be default', async () => {
        const { result } = renderContext();

        expect(result.current.isOpen).toBe(false);
    });

    it('should throw error when no context provided', async () => {
        const { result } = renderContext({ noWrapper: false });

        expect(result.error).toEqual(Error('useModalContext outside of ModalProvider'));
    });

    it('should throw error when no context provided', async () => {
        const { result } = renderHook(() => useModal({ title: 'title', body: <TestComponent /> }));

        act(() => {
            result.current.toggleModal();
        });

        render(<result.current.Modal />);

        expect(await screen.findByText('body')).toBeInTheDocument();
        expect(await screen.findByText('title')).toBeInTheDocument();
    });
});
