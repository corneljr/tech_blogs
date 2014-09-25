class Api::VotesController < ApplicationController
	def create
		Vote.create(post_id: params[:post_id], user_id: current_user.id)
		render nothing: true
	end

	def index
		if current_user
			@votes = current_user.votes.pluck(:post_id).uniq!
			render json: @votes
		else
			render json: {status: false}
		end
	end

	def unvote
		binding.pry
		@vote = current_user.votes.where(post_id: params[:id])
		@vote.destroy_all
		render nothing: true
	end
end
