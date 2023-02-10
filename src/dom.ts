const dom = (element: string, attribute: string) => {
    const metadata = document.createElement(element)
    const newContent = document.createTextNode(attribute)
    metadata.appendChild(newContent)

    return metadata
}

export default dom