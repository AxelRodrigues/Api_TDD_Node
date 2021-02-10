module.exports = (sequelize, DataTypes) => {
    const Marcas = sequelize.define("Marcas", {
        //id: DataTypes.STRING, 
      name: DataTypes.STRING,
    });

    return Marcas;
}