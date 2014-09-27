class CommentsController < ApplicationController
	def index
		post = Post.find(params[:post_id])
		comments = post.comments
		render json: comments
	end

	def create
	end

	def destroy
	end
end
