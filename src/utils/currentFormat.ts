export const currentFormat = (money: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
    })
    return formatter.format(money)
}