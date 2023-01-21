class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :chef, :description, :is_favorited, :video
end
