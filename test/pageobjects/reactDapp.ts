import Page from './page.js'

class ReactPage extends Page {
    /**
     * define elements
     */
    get testField () { return $('#testDapp1ID') }
    open () {
        return super.open('http://localhost:3000')
    }

}

export default new ReactPage()
