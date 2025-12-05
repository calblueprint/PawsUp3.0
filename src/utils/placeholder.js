
const defaults = [
    {name: 'andrew', purpose: 'being korean'},
    {name: 'sarah', purpose: 'canada'},
    {name: 'adi', purpose: 'pawar'},
    {name: 'dylan', purpose: 'being the best'},
]

export const getRandomPlaceholder = () => {
    const index = Math.floor(Math.random()*defaults.length)
    return defaults[index]
}