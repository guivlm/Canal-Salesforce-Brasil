/* eslint-disable no-console */
import { LightningElement, api, wire, track} from 'lwc';
import loadOpportunities from '@salesforce/apex/OpportunityController.getOpportunity';


export default class RelatedOpportunities extends LightningElement {

    @api recordId;
    @track opportunityData; 

    @wire(loadOpportunities, { accountId: '$recordId' })
    wiredOpportunities({ error, data }) {
        if (error) {

            console.log('error');
            console.dir(error);

        } else if (data) {

            this.opportunityData = data;
            console.log('data');
            console.dir(data);

        }
    }
}