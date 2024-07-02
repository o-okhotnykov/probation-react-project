export const validProps = {
    email: 'email@test.test',
    name: 'name',
    surname: 'surname',
    password: '123456Aa',
    confirmPassword: '123456Aa',
    birthDate: '2020-12-30',
};

export const badProps = {
    email: 'test',
    name: 'test',
    surname: 'test',
    password: '123456aa',
    confirmPassword: '123456bb',
    birthDate: 'test',
};

export const emptyProps = {
    email: '',
    name: '',
    surname: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
};

export const RegisterResponse = {
    data: {
        user: {
            email: 'email@test.test',
            name: 'test',
            surname: 'surname',
            birthDate: '2020-12-30T00:00:00.000Z',
            img: 'default-user.png',
            role: 'default',
            password: '123456Aa',
        },
    },
};
