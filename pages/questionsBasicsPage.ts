import { t } from 'testcafe';
import FlowBasePage from './helpers/flowBasePage';

export default class QuestionsBasicsPage extends FlowBasePage {

    constructor () {
        super()
    }

    async setBiologicalSex(value: string): Promise<void> {
        let valueIndex: number
        switch (value.toLowerCase()) {
            case 'male': {
                valueIndex = 0
                break;
            }
            case 'female': {
                valueIndex = 1
                break;
            }
            default: {
                throw new Error(`Value ${value} for biological sex field is not allowed.`)
            }
        }
        
        await t.click(this.baseSelector.find("div.choice > div.choice-item").nth(valueIndex))
    }

    async setBirthDate(value: string): Promise<void> {
        await t.typeText(this.baseSelector.find("input#dateOfBirth"), value)
    }

    async setZipCode(value: string): Promise<void> {
        await t.typeText(this.baseSelector.find("input#zipcode"), value)
    }

    async clickNext(): Promise<void> {
        await this.continue()
    }

    async answerAndProceed(basicsAnswers) {
        const { biologicalSex, birthDate, zipCode } = basicsAnswers
        await this.setBiologicalSex(biologicalSex)
        await this.setBirthDate(birthDate)
        await this.setZipCode(zipCode)
        await this.clickNext()
    }
}