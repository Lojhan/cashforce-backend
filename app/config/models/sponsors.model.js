module.exports = (sequelize, Sequelize) => {
	return sequelize.define('sponsors', {
                name: { type: Sequelize.STRING },
                tradingName: { type: Sequelize.STRING },
                cashforceTax: { type: Sequelize.STRING },
                responsibleName: { type: Sequelize.STRING },
                responsibleEmail: { type: Sequelize.STRING },
                responsiblePosition: { type: Sequelize.STRING },
                responsiblePhone: { type: Sequelize.STRING },
                responsibleMobile: { type: Sequelize.STRING },
                website: { type: Sequelize.STRING },
                postalCode: { type: Sequelize.STRING },
                address: { type: Sequelize.STRING },
                number: { type: Sequelize.STRING },
                complement: { type: Sequelize.STRING },
                neighborhood: { type: Sequelize.STRING },
                city: { type: Sequelize.STRING },
                state: { type: Sequelize.STRING },
                bank: { type: Sequelize.STRING },
                bankAgency: { type: Sequelize.STRING },
                account: { type: Sequelize.STRING },
                phoneNumber: { type: Sequelize.STRING },
                situation: { type: Sequelize.STRING },
                situationDate: { type: Sequelize.STRING },
                cnpjId: { type: Sequelize.INTEGER },
                email: { type: Sequelize.STRING },
        });
}

