class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image
      t.string :chef
      t.string :description
      t.string :video

      t.timestamps
    end
  end
end
