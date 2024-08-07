module.exports = (sequelize, DataTypes) => {
  // Similar to how you initialize a model in Flask
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Establishes one to many relationship
  Posts.associate = (models) => {
    Posts.hasMany(models.Comments, {
      // Deletes every comment if the post is deleted
      onDelete: "cascade",
    });
  };
  return Posts;
};
