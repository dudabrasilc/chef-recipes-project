class Recipe < ApplicationRecord
    validates :title, presence: true
    validates :image, presence: true
    validates :chef, presence: true
    validates :description, presence: true
    validates :video, format: URI::DEFAULT_PARSER.make_regexp(%w[http https])

    has_many :comments
    has_many :users, through: :comments
end
