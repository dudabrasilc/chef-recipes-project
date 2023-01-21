class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :recipe_id, :user_id

  belongs_to :user
  belongs_to :recipe
end
