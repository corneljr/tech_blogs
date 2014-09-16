class SessionsController < ApplicationController

  def create
  	if @user = login(params[:email], params[:password])
  		render json: {user: @user, status: true}
  	else
  		render json: {status: false, message: 'Invalid email or password'}
  	end
  end

  def destroy
  end

  def get_session
    if current_user
      render json: {user: current_user, status: true}
    else
      render json: {status: false}
    end
  end
end
