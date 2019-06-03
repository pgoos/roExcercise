import { t } from 'testcafe';
import FlowBasePage from './helpers/flowBasePage';

export default class MedicalQuestionsPregnancyPage extends FlowBasePage {

    constructor () {
        super()
    }

    async answer(value: string): Promise<void> {
        let indexNumber: number
        switch (value.toLowerCase()) {
            case 'no': {
                indexNumber = 0
                break;
            }
            case 'yes': {
                indexNumber = 1
                break;
            }
            case 'not sure': {
                indexNumber = 2
                break;
            }
            default: {
                break;
            }
        }
        await t.click(this.baseSelector.find("div.flow-choice_list > div.flow-choice_list-item").nth(indexNumber))
    }
}