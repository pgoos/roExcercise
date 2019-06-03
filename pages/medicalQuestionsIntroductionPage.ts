import { Selector, t } from 'testcafe';
import FlowBasePage from './helpers/flowBasePage';

export default class MedicalQuestionsIntroductionPage extends FlowBasePage {

    constructor () {
        super()
    }

    async continue(): Promise<void> {
        await t.wait(500)
        await t.click(this.baseSelector.find("button.flow-question-button").filterVisible())
    }
}