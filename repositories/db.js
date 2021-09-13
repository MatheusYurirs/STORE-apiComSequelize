import Sequelize from "sequelize";

const sequelize =  new Sequelize(
    "postgres://gnaljagg:QNLYD6tBJFVFgAo7LSjRSCS-Gy3Qif-u@chunee.db.elephantsql.com/gnaljagg",
    {
        dialect: "postgres",
        define: {
            timestamps:false
        }
    }
);

export default sequelize;