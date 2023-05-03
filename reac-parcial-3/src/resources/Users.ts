interface User {
    id: number,
    name: string,
    role: string,
    address: string,
    salary: number,
};

export const users : User[] = [
    {
        id: 1,
        name: 'Abelardo',
        role: 'Developer',
        address: 'abc123',
        salary: 1000,
    },
    {
        id: 2,
        name: 'Rodrigo',
        role: 'DevOps',
        address: 'Calle 5D #23-45',
        salary: 20000,
    },
    {
        id: 3,
        name: 'Maria',
        role: 'IOT',
        address: 'ioteuisv',
        salary: 3000,
    },
    {
        id: 4,
        name: 'Pedro',
        role: 'Marketing',
        address: 'fiatcui',
        salary: 4000,
    },
    {
        id: 5,
        name: 'Avengelin',
        role: 'QA',
        address: 'ajhkcag23',
        salary: 5000,
    },
];