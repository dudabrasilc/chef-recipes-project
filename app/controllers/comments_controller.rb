class CommentsController < ApplicationController

    def index 
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show 
        comment = find_comment
        render json: comment, status: :ok
    end

    def update 
        comment = find_comment
        if comment[:user_id] == session[:user_id]
            comment.update!(comment_params)
            render json: comment, status: :ok
        else
            render json: { error: "Not allowed to update" }, status: :unprocessable_entity
        end
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy 
        comment = find_comment
        if comment[:user_id] == session[:user_id]
            comment.destroy
            head :no_content
        else
            render json: { error: "Not allowed to delete" }, status: :unprocessable_entity
        end
    end

    private 

    def find_comment 
        Comment.find(params[:id])
    end

    def comment_params 
        params.permit(:description, :recipe_id, :user_id)
    end
end
