import { describe, expect, it } from 'vitest'
import { creerMainAleatoire, poker } from './poker.js'

describe('Poker', () => {
    it('doit retourner 0 points', () => {
        expect(poker()).toBe(0)
    })

    it('doit créer une main de 5 valeurs entre 1 et 14', () => {
        const main = creerMainAleatoire()

        expect(main).toHaveLength(5)
        expect(main.every((valeur) => Number.isInteger(valeur) && valeur >= 1 && valeur <= 14)).toBe(true)
    })
})