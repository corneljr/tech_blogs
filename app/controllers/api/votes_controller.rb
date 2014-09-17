class Api::VotesController < ApplicationController
	def create
		Vote.create(post_id: params[:post_id], user_id: current_user.id)
		render nothing: true
	end

	def index
		if current_user
			@votes = current_user.votes.pluck(:post_id)
			render json: @votes
		else
			render json: {status: false}
		end
	end
end
