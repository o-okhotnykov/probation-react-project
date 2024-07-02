import { createContext, useContext } from 'react';
import { format } from 'date-fns';
import { DateFormat } from 'constants/formatDateProvider';

interface IFormatDateProvider {
    formatDate: (date: string | Date) => string;
    local?: string;
}

export const FormatDateContext = createContext<IFormatDateProvider | undefined>(undefined);

export const FormatDateProvider: React.FC<{ local: DateFormat }> = ({ children, local }) => {
    const formatDate = (date: string | Date) => {
        const parseDate =
            typeof date === 'string' ? format(new Date(date), local) : format(date, local);
        return parseDate;
    };

    return (
        <FormatDateContext.Provider value={{ formatDate, local: DateFormat.default }}>
            {children}
        </FormatDateContext.Provider>
    );
};

export const useFormatDate = (): IFormatDateProvider => {
    const context = useContext(FormatDateContext);

    if (typeof context === 'undefined') {
        throw new Error('useFormatDate outside of FormatDateProvider');
    }

    return context;
};
