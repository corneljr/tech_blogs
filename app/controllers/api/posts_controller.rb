class Api::PostsController < ApplicationController

	def index
		@posts = Post.all.group_by { |post| post.created_at.strftime("%B #{post.created_at.day.ordinalize}") }
		render json: @posts
	end

	def create
		@post = Post.create(post_params)
		render json: @post
	end

	def update
		@post = Post.find(params[:id])
		if @post.update(post_params)
			render json: @post
		else
			render json: {success: false}
		end
	end

private
	
	def post_params
		params.require(:post).permit(:title, :url, :tagline, :vote_count)
	end

end
