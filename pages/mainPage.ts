import { t } from 'testcafe';
import BasePage from './helpers/basePage';

export default class MainPage extends BasePage {
    private emailTextField: Selector;
    private firstNameTextField: Selector
    private lastNameTextField: Selector
    private passwordTextField: Selector
    private agreeToTermsCheckbox: Selector|SelectorPromise

    constructor () {
        super()
        this.emailTextField = this.baseSelector.find('#temporaryEmail')
        this.firstNameTextField = this.baseSelector.find('#firstName')
        this.lastNameTextField = this.baseSelector.find('#lastName')
        this.passwordTextField = this.baseSelector.find('#password')
        this.agreeToTermsCheckbox = this.baseSelector.find('label.checkbox-label').withAttribute('for', 'agreedToTos')
    }

    async clickStartMyVisit(): Promise<void> {
        await this.continue()
    }

    async startMyVisitWith(onboardingData): Promise<void> {
        const { email, firstName, lastName, password } = onboardingData
        await t
            .typeText(this.emailTextField, email)
            .typeText(this.firstNameTextField, firstName)
            .typeText(this.lastNameTextField, lastName)
            .typeText(this.passwordTextField, password)
            .click(this.agreeToTermsCheckbox)
        await this.clickStartMyVisit()
    }  
}