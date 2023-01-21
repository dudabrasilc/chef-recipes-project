class CommentsController < ApplicationController

# GET /comments
def index
  comments = Comment.all
  render json: comments, status: :ok
end

# GET /comments/:id
def show
  # byebug
  comment = find_comment
  render json: comment, status: :ok
end

# PATCH /comments/:id
def update
  # byebug
  if comment[:user_id] == session[:user_id]
    comment.update!(comment_params)
    render json: comment, status: :ok
  else
    render json: { error: "Not allowed to update" }, status: :unprocessable_entity
  end
end

# POST /comments
def create
  new_comment = Comment.create!(comment_params)
  render json: new_comment, status: :created
end

# DELETE /comment/:id
def destroy
  if comment[:user_id] == session[:user_id]
    comment.destroy
    head :no_content
  else
    render json: { error: "Not allowed to delete" }, status: :unprocessable_entity
  end 
end


private

  def comment_params
    params.permit(:description, :recipe_id, :user_id)
  end

  def find_comment
    comment = Comment.find(params[:id])
  end



end
