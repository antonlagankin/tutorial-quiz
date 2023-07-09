import { useState } from 'react'
import { Progress } from "@material-tailwind/react";

export interface IQuestion {
    title: string,
    variants: string[],
    correct: number
}

export interface IQuestionProps {
    question: IQuestion
    onAnswer: (f: boolean) => void
}

export function Question({question, onAnswer}: IQuestionProps) {
    const [correctNum, setCorrectNum] = useState(0)

    function answerHandler(index: number) {
        if (index === question.correct) {
            setCorrectNum(correctNum + 1)
            onAnswer(true)
        }
        else {
            onAnswer(false)
        }
    }

    return (
        <div className="w-[500px] p-5 rounded-2xl bg-white absolute top-10 left-1/2 -translate-x-1/2 justify-center shadow-2xl items-center">
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                <div className="h-1 bg-primary" style={{width: '45%'}}></div>
            </div>
            <Progress/>
            <h1 className="text-2xl font-bold underline py-4 text-left">
                {question.title}
            </h1>
            <div className="flex flex-col mr-1" id="div-header-overplot">
                {
                    question.variants.map((v, i) => {
                        return <button className="option-button" key={i} onClick={() => answerHandler(i)}>{v}</button>
                    })
                }
            </div>
        </div>
    )
}