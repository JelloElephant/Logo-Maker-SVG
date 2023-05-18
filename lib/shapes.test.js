const Shapes = require('./shapes.js')


describe('Shapes', () => {
    describe('Circle', () => {
        it('should instantiate shape object that is a cyan Circle', () => {
            const shape = new Shapes.Circle()
            shape.setColor('#00ffff')
            expect(shape.render().match(`<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle cx="125" cy="125" r="100" fill="#00ffff"/> <text fill="" font-size="50" x="100" y="140"></text> </svg>`))
        })
    })
})


describe('Shapes', () => {
    describe('Triangle', () => {
        it('should instantiate shape object that is a yellow Triangle', () => {
            const shape = new Shapes.Triangle()
            shape.setColor('yellow')
            expect(shape.render().match('<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="135,0 250,175 25,175" fill="yellow"/><text fill="" font-size="25" x="80" y="125"></text> </svg>'))
        })
    })
})


describe('Shapes', () => {
    describe('Square', () => {
        it('should  instantiate shape object that is a magenta Square`', () => {
            const shape = new Shapes.Square()
            shape.setColor('#ff00ff')
            expect(shape.render().match('<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="135,0 250,175 25,175" fill="#ff00ff"/> <text fill="" font-size="25" x="80" y="125"></text> </svg>'))
        })
    })
})

describe('Shapes', () => {
    describe('Circle', () => {
        it('should instantiate shape object that is a blue Circle with centered text "TS1" in red', () => {
            const shape = new Shapes.Circle()
            shape.setColor('blue')
            shape.setText('TS1')
            shape.setTxtColor('red')
            expect(shape.render().match(`<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle cx="125" cy="125" r="100" fill="blue"/> <text fill="red" font-size="50" x="100" y="140">TS1</text> </svg>`))
        })
    })
})

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should instantiate shape object that is a yellow Triangle with centered text "TS2" in blue', () => {
            const shape = new Shapes.Triangle()
            shape.setColor('yellow')
            shape.setText('TS2')
            shape.setTxtColor('blue')
            expect(shape.render().match('<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="135,0 250,175 25,175" fill="yellow"/><text fill="blue" font-size="25" x="80" y="125">TS2</text> </svg>'))
        })
    })
})


describe('Shapes', () => {
    describe('Square', () => {
        it('should  instantiate shape object that is a red Square with centered text "TS3" in green', () => {
            const shape = new Shapes.Square()
            shape.setColor('red')
            shape.setText('TS3')
            shape.setTxtColor('green')
            expect(shape.render().match('<svg height="300" width="200" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="135,0 250,175 25,175" fill="red"/> <text fill="greed" font-size="25" x="80" y="125">TS3</text> </svg>'))
        })
    })
})