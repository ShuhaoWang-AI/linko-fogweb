import activeCards from './mock-data/activeCards'; 

class DataServicesDataProvider
{
    async getActiveCards() { 
        return activeCards;
    } 
}

export const dataServices = new DataServicesDataProvider();