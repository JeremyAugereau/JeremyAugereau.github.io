import {Question} from '../types/question.ts';

export const quiz: Question[] = [
    {
        content: 'Combien ?',
        firstAnswer: {
            content: '42',
            score: 10,
            color: 'red'
        },
        secondAnswer:
            {
                content: '24',
                score: -10,
                color: 'blue'
            }

    },
    {
        content: 'Comment réagis-tu face à un collègue qui prend la dernière part de pizza ?',
        firstAnswer:
            {
                content: 'Tu le regardes intensément en espérant qu\'il s\'étouffe',
                score: -1,
                color: 'red'
            },
        secondAnswer:
            {
                content: 'Tu souris et dis "Ce n\'est pas grave, je prendrai une salade" ',
                score: +1,
                color: 'blue'
            }
    }
];