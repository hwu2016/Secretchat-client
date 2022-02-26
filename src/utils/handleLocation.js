const handleLocation = (loc) => {
    const len = loc.length
    let i = len - 1;
    while (i > 0) {
        if (loc[i] === '/') {
            break
        }
        i--
    }
    return loc.slice(i + 1, len)
}

export default handleLocation