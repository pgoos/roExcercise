import { Selector, t } from 'testcafe';
import BasePage from './helpers/basePage';

export default class HowItWorksPage extends BasePage {

    constructor () {
        super()
    }

    async continueMyVisit(): Promise<void> {
        await t.click(this.baseSelector.find("button.start-button"))
    }
}