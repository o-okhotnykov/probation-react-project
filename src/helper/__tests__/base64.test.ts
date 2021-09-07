import { fileToBase64 } from '../base64';

const file: File = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
});

describe('Helper Base64', () => {
    it('return string', () => {
        fileToBase64();
    });
});
