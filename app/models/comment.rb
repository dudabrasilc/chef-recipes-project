class Comment < ApplicationRecord
  validates :description, presence: true
  validates :recipe_id, presence: true

  belongs_to :user
  belongs_to :recipe
end
