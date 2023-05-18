class Shape {
    constructor(color, text, textColor) {
        this.color = color
        this.text = text
        this.textColor = textColor
    }

    render() {
        return ``
    }

    setColor(color) {
        this.color = color
    }

    setText(text)  {
        this.text = text
    }

    setTxtColor(txtColor) {
        this.textColor = txtColor
    }

}

class Circle extends Shape {
    
    render() {
        return `<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="125" r="100" fill="${this.color}"/>
        <text fill="${this.textColor}" font-size="50" x="60" y="140">${this.text}</text>
       </svg>`
    }

}

class Square extends Shape {

    render() {
        return `<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" height="175" width="175" fill="${this.color}"/>
        <text fill="${this.textColor}" font-size="50" x="70" y="125">${this.text}</text>
       </svg>`
    }
}

class Triangle extends Shape {

    render() {
        return `<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 10 200,182 0,182" fill="${this.color}"/>
        <text fill="${this.textColor}" font-size="25" x="80" y="125">${this.text}</text> 
        </svg>`
    }
}


module.exports = {Circle, Square, Triangle};