import Page from './page.js'

class NextPage extends Page {
    get testField () { return $('#testDapp2ID') }
    open () {
        return super.open('http://localhost:3334')
    }

}

export default new NextPage()
