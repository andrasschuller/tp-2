export function creerMainAleatoire() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 14) + 1)
}

export function poker() {
    return 0;
}