


module.exports = (sequelize, Sequelize) => {
	return sequelize.define('orders', {
            orderNfId: { type: Sequelize.STRING },
            orderNumber: { type: Sequelize.STRING },
            orderPath: { type: Sequelize.STRING },
            orderFileName: { type: Sequelize.STRING },
            orderOriginalName: { type: Sequelize.STRING },
            emissionDate: { type: Sequelize.STRING },
            pdfFile: { type: Sequelize.STRING },
            emitedTo: { type: Sequelize.STRING },
            nNf: { type: Sequelize.STRING },
            CTE: { type: Sequelize.STRING },
            value: { type: Sequelize.STRING },
            cnpjId: { type: Sequelize.INTEGER },
            userId: { type: Sequelize.INTEGER },
            buyerId: { type: Sequelize.INTEGER },
            providerId: { type: Sequelize.INTEGER },
            orderStatusBuyer: { type: Sequelize.STRING, defaultValue: '0' },
            orderStatusProvider: { type: Sequelize.STRING, defaultValue: '0' },
            deliveryReceipt: { type: Sequelize.STRING },
            cargoPackingList: { type: Sequelize.STRING },
            deliveryCtrc: { type: Sequelize.STRING }
        });
}