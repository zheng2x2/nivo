/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { cursorInRect } from '../../../src/lib/interactivity/detect'

describe('cursorInRect()', () => {
    it('should return true if x/y positions are in given rect', () => {
        expect(cursorInRect(10, 10, 20, 20, 20, 20)).toBe(true)
    })

    it('should return false if x/y positions are not in given rect', () => {
        expect(cursorInRect(10, 10, 20, 20, 40, 40)).toBe(false)
    })
})
