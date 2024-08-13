export const useCurrency = (amount) => {
    return computed(() => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'IDR'
        }).format(isRef(amount) ? amount.value : amount)
    })
}

// this way if you want to return many variables
// export const useCurrency = (amount) => {
//     const currency = computed(() => {
//         return new Intl.NumberFormat('en-IN', {
//             style: 'currency',
//             currency: 'IDR'
//         }).format(isRef(amount) ? amount.value : amount)
//     })

//     return {
//         currency
//     }
// }