module.exports = (sequelize, DataType) =>{
  const user = sequelize.define("User", {
    id:{
      type:DataType.STRING(30),
      allowNull:false

    },user_id:{
      type: DataType.STRING(30),
      allowNull:false
    },
    name:{
      type:DataType.STRING(30),
      allowNull:false

    },phone:{
      type: DataType.STRING(30),
      allowNull:false
    },   
     email:{
      allowNull:false

    },birth:{
      type: DataType.STRING(30),
      allowNull:false
    },
    marketingchecked:{
      type:DataType.STRING(310),
      allowNull:false

    }
  },{
    timestamps : false,
  })
  return user
}