const users = [
    { name: 'mario', premium: true },
    { name: 'luigi', premium: true },
    { name: 'yoshii', premium: false },
    { name: 'toad', premium: false },
    { name: 'peach', premium: true }
]

export const getPremium = (users) => {
    return users.filter(users => users.premium);
}

export default users;