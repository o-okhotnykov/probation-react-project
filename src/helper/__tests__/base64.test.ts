import { fileToBase64 } from '../base64';

const goodFile: File = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
});

describe('Helper Base64', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    it('good file must return string', () => {
        return fileToBase64(goodFile).then((data) => {
            expect(typeof data).toBe('string');
        });
    });
});
