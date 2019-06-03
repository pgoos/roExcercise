import BasePage from './basePage';
import { StepInformationComponent } from '../components/stepInformationComponent';

export default class FlowBasePage extends BasePage {

    constructor () {
        super()
    }

    get stepInformation(): StepInformationComponent {
        return new StepInformationComponent(this.baseSelector)
    }

    get headerText(): Promise<string> {
        return this.baseSelector.find("div.flow-question-overlay--in div.flow-question-header-title").textContent
    }
}