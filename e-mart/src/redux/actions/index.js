//for add item to car

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

//for delete item

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
