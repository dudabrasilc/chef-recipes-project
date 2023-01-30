class RecipesController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    

    def index
        recipes = Recipe.all
        render json: recipes, status: :ok
    end

    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end

    def update 
        recipe = find_recipe
        recipe.update!(recipe_params)
        render json: recipe, status: :ok
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end
    
    private

    def find_recipe
        Recipe.find(params[:id])
    end

    def recipe_params
        params.permit(:is_favorited, :title, :image, :chef, :description, :video)
    end
end
