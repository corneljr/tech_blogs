class Api::PostsController < ApplicationController

	def index
		@posts = Post.all
		render json: @posts
	end

	def create
		binding.pry
		@post = Post.create(note_params)
		render json: @post
	end

private
	
	def note_params
		params.require(:post).permit(:title, :url, :tagline)
	end

end
