
const defaults = [
    {name: 'adi', purpose: 'pawar'},
    {name: 'dylan', purpose: 'being the goat'},
    {name: 'kyle', purpose: 'best vpt'},
    {name: 'rohin', purpose: 'my o my'},
    {name: 'sarah', purpose: 'boom'},
    {name: 'kyrene', purpose: 'meow'},
    {name: 'catherine', purpose: 'wholesome'},
    {name: 'aiden', purpose: 'harrison barnes'},
    {name: 'etam', purpose: 'big back'},
    {name: 'melissa', purpose: 'incest'},
    {name: 'rachael', purpose: 'wachael'},
    {name: 'neha', purpose: 'texas'},
    {name: 'julee', purpose: 'i know that cookie good'},
    {name: 'gugu', purpose: 'poker'},
    {name: 'stephen', purpose: 'abb'},
    {name: 'josh', purpose: 'abb'},
    {name: 'austin', purpose: 'drip'},
    {name: 'david', purpose: 'yippee'},
    {name: 'alex', purpose: 'apple'},
    {name: 'dion', purpose: 'unc'},
    {name: 'nathan', purpose: 'unc'},
    {name: 'justin', purpose: 'lebron'},
    {name: 'carolyn', purpose: 'fob'},
    {name: 'carys', purpose: 'chindo'},
    {name: 'emily', purpose: 'china'},
    {name: 'anh', purpose: 'vietnam'},
]

export const getRandomPlaceholder = () => {
    const index = Math.floor(Math.random()*defaults.length)
    return defaults[index]
}