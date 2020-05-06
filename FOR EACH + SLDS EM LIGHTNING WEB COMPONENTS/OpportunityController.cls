public with sharing class OpportunityController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunity(String accountId){
        return [SELECT Id, Name, Amount, StageName, Type, CreatedDate FROM Opportunity WHERE AccountId =: accountId ORDER BY CreatedDate DESC];
    }
}