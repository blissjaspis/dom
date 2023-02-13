import dom from "../src/dom"
import { test, expect, describe} from "vitest"

describe('create element', () => {
    test('tagname exist and have text value', () => {
        const element = dom.add('h1', 'the best title')
        expect(element.result?.tagName).toBe('H1')
        expect(element.result?.innerText).toBe('the best title')
    })
})

describe('can create child', () => {
    test('tagname child exist', () => {
        const element = dom.add('div').addChild('h1', 'divs child')

        expect(element.result?.innerHTML).toBe('<h1>divs child</h1>')
    })
})
