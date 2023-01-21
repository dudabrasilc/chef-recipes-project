class CommentsController < ApplicationController

# GET /comments
def index
  comments = Comment.all
  render json: comments, status: :ok
end

# GET /comments/:id
def show
  byebug
  comment = Comment.find(params[:id])
  render json: comment, status: :ok
end

# PATCH /comments/:id
def update
  byebug
  comment = Comment.find(params[:id])
  comment.update(description: params[:description])
  # render json: comment, status: :ok
end



private

def comment_params
  params.permit(:description, :recipe_id, :user_id)
end



end
