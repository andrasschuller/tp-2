// Lors de la creation du code, je me suis servi de l'IA

import { describe, expect, it } from 'vitest'
import { creerMainAleatoire, creerMainsAleatoires, mainValide, poker } from './poker.js'

describe('Poker', () => {
    
    it('doit retourner 0 points', () => {
        expect(poker()).toBe(0)
    })

    // Les tests de création de main et de mains ont été générés par IA

    it('doit créer une main de 5 valeurs entre 1 et 14', () => {
        const main = creerMainAleatoire()

        expect(main).toHaveLength(5)
        expect(main.every((valeur) => Number.isInteger(valeur) && valeur >= 1 && valeur <= 14)).toBe(true)
    })

    it('doit créer un tableau de mains valides', () => {
        const mains = creerMainsAleatoires(3)

        expect(mains).toHaveLength(3)
        expect(mains.every(mainValide)).toBe(true)
    })

    it('doit détecter une main invalide', () => {
        expect(mainValide([1, 2, 3, 4, 15])).toBe(false)
        expect(mainValide([1, 2, 3, 4])).toBe(false)
    })

})