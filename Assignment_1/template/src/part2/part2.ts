import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countLetters: undefined = undefined;

/* Question 2 */
const stackHandler = (parStack: string[], curPar: string, oppPar: string): string[] =>
    R.isEmpty(parStack) ? R.prepend(curPar, parStack) :
    R.head(parStack) === oppPar ? R.tail(parStack) :
    R.prepend(curPar, parStack)

const stackReducer = (parStack: string[], curPar: string): string[] => 
    R.includes(curPar, "{[(") ? R.prepend(curPar, parStack) :
    curPar === "}" ? stackHandler(parStack, curPar, "{") :
    curPar === "]" ? stackHandler(parStack, curPar, "[") :
    curPar === ")" ? stackHandler(parStack, curPar, "(") :
    parStack;

export const isPaired: (str: string) => boolean = R.pipe(
    stringToArray,
    R.reduce(stackReducer, []),
    R.isEmpty
);

console.log(isPaired("([{}])"))

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence : undefined = undefined

