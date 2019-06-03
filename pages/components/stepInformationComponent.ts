export class StepInformationComponent {
    private baseSelector: Selector

    constructor (parentSelector: Selector) {
        this.baseSelector = parentSelector.find("header")
    }

    get text(): Promise<string> {
        return this.baseSelector.find("h2").textContent
    }
}