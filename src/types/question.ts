export type Question = {
    content: string;
    imagePath ?: string;
    firstAnswer: Answer;
    secondAnswer: Answer;
}

export type Answer = {
    content: string;
    score: number;
    color ?: string;
}