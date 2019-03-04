import activeCards from './mock-data/active-cards'; 

class DataServicesDataProvider
{
    async getActiveCards() { 
        return activeCards;
    } 
}

export const dataServices = new DataServicesDataProvider();