class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    # POST '/signup'
    # OK
    def create
        # byebug
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # GET '/me'
    # ???
    def show
        render json: @current_user
    end


    private

    def user_params
        params.permit(:username, :password)
    end

end
