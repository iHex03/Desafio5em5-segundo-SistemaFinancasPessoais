import { Category } from '../types/Category';

export const categories: Category = {
    food :          { title: 'Alimentação',     color: 'blue',      expense: true },
    rent :          { title: 'Aluguel',         color: 'brown',     expense: true },
    salary :        { title: 'Salário',         color: 'green',     expense: false },
    entertainment : { title: 'Entretenimento',  color: 'purple',    expense: true },
    bills :         { title: 'Contas',          color: 'orange',    expense: true },
    freelance :     { title: 'Freelance',       color: 'yellow',    expense: false },
    savings :       { title: 'Investimentos',   color: 'grey',      expense: false }
}