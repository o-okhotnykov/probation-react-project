import { renderHook } from '@testing-library/react-hooks';
import { DateFormat } from 'constants/formatDateProvider';
import { FormatDateProvider, useFormatDate } from 'context/FormatDateProvider';

const render = ({ noWrapper } = { noWrapper: true }) => {
    return renderHook(() => useFormatDate(), {
        ...(noWrapper && { wrapper: FormatDateProvider }),
        initialProps: {
            local: DateFormat.default,
        },
    });
};

describe('Format Date Picker', () => {
    it('should local to be default', async () => {
        const { result } = render();

        expect(result.current.local).toBe(DateFormat.default);
    });

    it.each([
        { isoDate: '2022-04-03T10:20:42.000Z', expected: '03-04-2022' },
        { isoDate: new Date('2022-04-03T10:20:42.000Z'), expected: '03-04-2022' },
    ])('should formatDate correct work', ({ isoDate, expected }) => {
        const { result } = render();
        expect(result.current.formatDate(isoDate)).toBe(expected);
    });

    it('should throw error when no context provided', async () => {
        const { result } = render({ noWrapper: false });

        expect(result.error).toEqual(Error('useFormatDate outside of FormatDateProvider'));
    });
});
