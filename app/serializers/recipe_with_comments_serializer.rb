class RecipeWithCommentsSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :chef, :description
  has_many :comments

end
