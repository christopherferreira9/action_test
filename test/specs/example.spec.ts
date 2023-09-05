import NextPage from '../pageobjects/nextDapp.js'
import ReactDapp from "../pageobjects/reactDapp.js";

describe('auth form', () => {
    it('should deny access with wrong creds', async () => {
        await NextPage.open()
        await expect(NextPage.testField).toHaveTextContaining('TEST DAPP 2')
    })

    it('should allow access with correct creds', async () => {
        await ReactDapp.open()
        await expect(ReactDapp.testField).toHaveTextContaining('TEST DAPP 1')
    })
})
