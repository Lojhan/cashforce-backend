module.exports = (sequelize, Sequelize) => {
	return sequelize.define('users', {
                name: { type: Sequelize.STRING },
                email: { type: Sequelize.STRING },
                phoneNumber: { type: Sequelize.STRING },
                mobile: { type: Sequelize.STRING },
                departament: { type: Sequelize.STRING },
                verificationCode: { type: Sequelize.STRING },
                emailChecked: { type: Sequelize.INTEGER },
                cashforceAdm: { type: Sequelize.STRING }
        });
}


