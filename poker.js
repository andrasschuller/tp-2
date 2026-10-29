// Lors de la creation du code, je me suis servi de l'IA

export function creerMainAleatoire() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 14) + 1)
}

export function creerMainsAleatoires(nombreMains) {
    if (!Number.isInteger(nombreMains) || nombreMains < 0) {
        throw new RangeError('Le nombre de mains doit être un entier positif ou nul')
    }

    return Array.from({ length: nombreMains }, () => creerMainAleatoire())
}

export function mainValide(main) {
    return Array.isArray(main) &&
        main.length === 5 &&
        main.every((valeur) => Number.isInteger(valeur) && valeur >= 1 && valeur <= 14)
}

export function poker() {
    const mains = creerMainsAleatoires(5)
    let points = 0;

    for (const main of mains) {
        let valuesCount = {};
        for (const valeur of main) {
            valuesCount[valeur] = (valuesCount[valeur] || 0) + 1;
        }
        if (Object.values(valuesCount).some(count => count >= 3)) {
            points += 30;
        }
    }


    return points;
}