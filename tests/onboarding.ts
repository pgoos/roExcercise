import Config from "../config";
import MainPage from "../pages/mainPage";
import { loadOnboardingData } from "../testDataReader";
import HowItWorksPage from "../pages/howItWorksPage";
import QuestionsBasicsPage from "../pages/questionsBasicsPage";
import MedicalQuestionsIntroductionPage from "../pages/medicalQuestionsIntroductionPage";
import MedicalQuestionsPregnancyPage from "../pages/medicalQuestionsPregnancyPage";
import SuggestedTreatmentPage from "../pages/suggestedTreatmentPage";
import TestSetup from "../helpers/testSetup";

const config = new Config()
const mainPage = new MainPage()
const howItWorksPage = new HowItWorksPage()
const questionsBasicsPage = new QuestionsBasicsPage()
const medicalQuestionsIntroPage = new MedicalQuestionsIntroductionPage()
const medicalQuestionsPregnancyPage = new MedicalQuestionsPregnancyPage()
const suggestedTreatmentPage = new SuggestedTreatmentPage()

fixture("Onboarding for vaginal dryness functionality")
    .page(config.buildUrl)
    .beforeEach(async (t) => {
        await new TestSetup().testInitialization()
    });

test("Online treatment for vaginal dryness is not available for a pregnant woman", async (t) => {
    var onboardingData = loadOnboardingData()
    await mainPage.startMyVisitWith(onboardingData.contact)
    await howItWorksPage.continueMyVisit()
    await questionsBasicsPage.answerAndProceed(onboardingData.questions.basics)
    await medicalQuestionsIntroPage.continue()
    await medicalQuestionsPregnancyPage.answer(onboardingData.questions.pregnant)
    await t.expect(await suggestedTreatmentPage.stepInformation.text).eql("How can we help?")
    await t.expect(await suggestedTreatmentPage.headerText).eql("Unfortunately, our prescription treatment for vaginal dryness, vaginal estradiol, is not approved for use during pregnancy or breastfeeding.")
});
