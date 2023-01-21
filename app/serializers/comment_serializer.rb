class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :recipe_id, :user_id
end
