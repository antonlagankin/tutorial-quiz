import confetti from '../img/confetti.png';

export interface IResultProp {
    correct: number,
    total: number,
    onRestart: () => void
}

export function Result({correct, total, onRestart}: IResultProp) {
    return (
        <div className="w-[500px] p-5 rounded-2xl bg-white absolute top-10 left-1/2 -translate-x-1/2 justify-center shadow-2xl">
            <img src={confetti} className='mx-auto'/>
            <h1 className="text-2xl font-bold underline py-4">
                {`You answered ${correct} questions of ${total}`}
            </h1>
            <button className="bg-red-600 py-2 px-4 rounded-3xl text-white" onClick={onRestart}>Try again</button>
        </div>
    )
}