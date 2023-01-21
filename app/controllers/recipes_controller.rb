class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    render json: recipes, status: :ok
  end

  def show
    recipe = find_recipe
    render json: recipe, status: :ok
  end

  def update
    if recipe[:user_id] == session[:user_id]
      recipe.update!(recipe_params)
      render json: recipe, status: :ok     
    else
      render json: { error: "Not allowed to update" }, status: :unprocessable_entity
    end
  end

  def create
    recipe = Recipe.create!(recipe_params)
    render json: recipe, status: :created
  end

  def destroy
    recipe = find_recipe
    recipe.destroy
    head :no_content
  end


private

  def find_recipe
    Recipe.find(params[:id])
  end

  def recipe_params
    params.permit(:is_favorited, :title, :image, :chef, :description, :video)
  end

end
