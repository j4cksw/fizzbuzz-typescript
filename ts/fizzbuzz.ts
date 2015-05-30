class FizzBuzz{
    rulesFactory: RulesFactory;

    constructor(rulesFactory: RulesFactory){
        this.rulesFactory = rulesFactory;
    }

    say(input: number): string {
        var result;
        this.rulesFactory.createRulesForNumber(input).some(function (rule) {
            result = rule.answer();
            return rule.isAccept();
        });
        return result;
    }
}
