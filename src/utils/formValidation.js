export const isNameValid = (name) => {
    const regex = /^[a-zA-Z\u00C0-\u017F' -]{2,30}$/u
    return regex.test(name)
}

export const isStreetValid = (street) => {
    const regex = /^(?=.*\d)[a-zA-Z0-9\s'.\u00C0-\u017F-]{2,50}$/
    return regex.test(street)
}

export const isCityValid = (city) => {
    const regex = /^[a-zA-Z\u00C0-\u017F\s-]{2,30}$/
    return regex.test(city)
}
