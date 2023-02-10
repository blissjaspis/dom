import dom from "../src/dom"
import { test, expect} from "vitest"

test('can create element', () => { 
    const element = dom('h1', 'Mau Makan Dulu') as HTMLHeadingElement
    expect(element.innerHTML).toBe('Mau Makan Dulu')
 })

test('check when show invalid element', () => { 
    const element = dom('example', 'testing') as HTMLUnknownElement
    expect(element.toString()).toBe("<example>testing</example>")
 })