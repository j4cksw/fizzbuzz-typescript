class RulesFactory {
    createRulesForNumber(input: number): Rule[]{
        return [
            new FizzBuzzRule(input),
            new BuzzRule(input),
            new FizzRule(input),
            new OtherRule(input)
        ];
    }
}
