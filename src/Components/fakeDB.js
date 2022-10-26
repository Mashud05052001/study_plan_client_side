const previousAvailability = () => {
    const available = localStorage.getItem('courses-cart');
    if (available) {
        const parsing = JSON.parse(available);
        return parsing;
    }
    else return [];
}
const setToLS = (id, image, name, amount) => {
    const previousAvailable = previousAvailability();
    console.log('asas', previousAvailability);
    const updatedCart = [...previousAvailable];
    const newItem = {
        id: id,
        image: image,
        name: name,
        amount: amount
    }
    const isPreviousAvailable = previousAvailable.find(item => item.id === id);
    if (!isPreviousAvailable) {
        updatedCart.push(newItem);
    }
    const stringifyUpdatedCart = JSON.stringify(updatedCart);
    localStorage.setItem('courses-cart', stringifyUpdatedCart);
}
const getFromLS = () => {
    return JSON.parse('courses-cart');
}

export { setToLS, getFromLS };