import { describe, expect, it } from 'vitest'
import { poker } from './poker.js'

describe('Poker', () => {
    it('doit retourner 0 points', () => {
        expect(poker()).toBe(0)
    })
})