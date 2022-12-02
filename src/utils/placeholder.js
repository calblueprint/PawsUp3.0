
const defaults = [
    {name: 'jacob', purpose: 'building paws'},
    {name: 'eloza', purpose: 'slaying'},
    {name: 'shannon', purpose: 'AAAAAAAA'},
    {name: 'ceci', purpose: 'hobbler'},
    {name: 'kelly', purpose: 'canada'},
    {name: 'jenny', purpose: 'ouchie'},
    {name: 'jared', purpose: 'factionless'},
    {name: 'anu', purpose: 'externaling'},
    {name: 'andrew', purpose: 'being korean'},
]

export const getRandomPlaceholder = () => {
    const index = Math.floor(Math.random()*defaults.length)
    return defaults[index]
}