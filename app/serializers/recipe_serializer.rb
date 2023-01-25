class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :chef, :description, :video
end
