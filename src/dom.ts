interface ObjectChild {
    [index: string] : string
}

interface Dom {
    result?: HTMLElement
    add: (element: string, attribute?: string | ObjectChild) => this
    addChild: (element: string, attribute?: string | ObjectChild) => this
    build: (element?: HTMLElement) => void
}

function process(metadata : HTMLElement, attributes?: string | ObjectChild) {
    if (attributes) {
        if (attributes instanceof Object) {
            for (const key in attributes) {
                if (key === 'text') {
                    metadata.appendChild(document.createTextNode(attributes[key]))
                } else {
                    metadata.setAttribute(key, attributes[key])
                }
            }
        } else {
            const newContent = document.createTextNode(attributes)
            metadata.appendChild(newContent)
        }
    }
}

const dom : Dom = {
    add(element, attribute) {
        const metadata = document.createElement(element)
        process(metadata, attribute)
        this.result = metadata
        return this
    },
    addChild(element, attribute) {
        const metadata = document.createElement(element)
        process(metadata, attribute)
        this.result?.appendChild(metadata)
        
        return this
    },
    build(element) {
        if (this.result) {
            if (element) {
                element?.appendChild(this.result)
            } else {
                document.body.appendChild(this.result)
            }
        }
    },
}

export default dom